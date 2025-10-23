import { useEffect, useRef, useState, memo, useMemo, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { GraphData, GraphNode, nodeColors } from '@/types/graphData';
import * as THREE from 'three';

interface KnowledgeGraph3DProps {
  data: GraphData;
  className?: string;
}

const KnowledgeGraph3D = memo(({ data, className }: KnowledgeGraph3DProps) => {
  const graphRef = useRef<any>();
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHoveredIdRef = useRef<string | null>(null);
  const isSimulationPausedRef = useRef<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const frozenNodesRef = useRef<Map<string, { x: number; y: number; z: number }>>(new Map());
  const nodeObjectsCache = useRef<Map<string, THREE.Group>>(new Map());
  
  // Memoize graph data to prevent unnecessary re-renders
  const graphData = useMemo(() => data, [data]);

  // Clear cache when data changes
  useEffect(() => {
    nodeObjectsCache.current.clear();
  }, [graphData]);

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      // Clean up any pending hover timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Set initial camera position and configure forces
  // 
  // DAG POSITIONING EXPLANATION:
  // ============================
  // 1. VERTICAL POSITIONING (Y-axis):
  //    - Category/Topic nodes use built-in DAG "top-down" layout (dagMode="td")
  //    - Vertical spacing between layers controlled by dagLevelDistance={150}
  //    - Colored nodes (resources) are forced to match their parent's Y-level (horizontal spread)
  //
  // 2. HORIZONTAL POSITIONING (X-Z plane):
  //    - Category/Topic nodes: positioned automatically by DAG algorithm with horizontal repulsion
  //    - Colored nodes: manually positioned in a horizontal circle around their parent node
  //    - Circle radius determines horizontal spread (larger radius = more horizontal space)
  //
  // 3. NODE FIXING TIMELINE:
  //    - 0-800ms: Initial constraints applied to keep colored nodes at parent's Y-level
  //    - 1500ms: Colored nodes positioned in horizontal circle and fixed (fx, fy, fz set)
  //    - 2000ms: ALL nodes frozen permanently, simulation stopped, positions locked
  //
  useEffect(() => {
    if (graphRef.current) {
      const graph = graphRef.current;
      
      // Set initial camera position - farther back to see whole graph
      const distance = 500;
      graph.cameraPosition({ z: distance });

      // PHASE 1 (0-800ms): Force colored nodes to match parent's y-level immediately and continuously
      // This prevents them from drifting vertically during initial layout
      const forceHorizontal = () => {
        graphData.nodes.forEach((node: any) => {
          if (node.type !== 'category') {
            const parentLink = graphData.links.find((link: any) => 
              (link.target === node.id || (typeof link.target === 'object' && link.target.id === node.id))
            );
            if (parentLink) {
              const parentId = typeof parentLink.source === 'object' ? parentLink.source.id : parentLink.source;
              const parentNode = graphData.nodes.find((n: any) => n.id === parentId);
              if (parentNode && parentNode.y !== undefined) {
                node.y = parentNode.y;
                node.fy = parentNode.y;
                node.vy = 0;
              }
            }
          }
        });
      };
      
      // Apply horizontal constraint repeatedly during initialization
      setTimeout(forceHorizontal, 100);
      setTimeout(forceHorizontal, 300);
      setTimeout(forceHorizontal, 500);
      setTimeout(forceHorizontal, 800);

      // PHASE 2 (1500ms): Position colored nodes horizontally around their parents
      // At this point, category nodes have settled into their DAG positions
      setTimeout(() => {
        if (graph.d3Force) {
          // Disable radial force that might push nodes up/down
          const radialForce = graph.d3Force('radial');
          if (radialForce) {
            radialForce.strength(0);
          }
          
          // Increase horizontal repulsion between nodes at same level for more spacing
          const chargeForce = graph.d3Force('charge');
          if (chargeForce) {
            chargeForce.strength(-4000); // Increased from -3000 for more horizontal space
          }
          
          // Manually position colored nodes in a horizontal ring around parent
          graphData.nodes.forEach((node: any, index: number) => {
            if (node.type !== 'category') {
              const parentLink = graphData.links.find((link: any) => 
                (link.target === node.id || (typeof link.target === 'object' && link.target.id === node.id))
              );
              
              if (parentLink) {
                const parentId = typeof parentLink.source === 'object' ? parentLink.source.id : parentLink.source;
                const parentNode = graphData.nodes.find((n: any) => n.id === parentId);
                
                if (parentNode && parentNode.x !== undefined && parentNode.y !== undefined && parentNode.z !== undefined) {
                  // Count colored children for this parent
                  const siblings = graphData.nodes.filter((n: any) => {
                    if (n.type === 'category') return false;
                    const siblingLink = graphData.links.find((l: any) => 
                      (l.target === n.id || (typeof l.target === 'object' && l.target.id === n.id))
                    );
                    if (!siblingLink) return false;
                    const siblingParentId = typeof siblingLink.source === 'object' ? siblingLink.source.id : siblingLink.source;
                    return siblingParentId === parentId;
                  });
                  
                  const siblingIndex = siblings.findIndex((s: any) => s.id === node.id);
                  const angleStep = (Math.PI * 2) / siblings.length;
                  const angle = siblingIndex * angleStep;
                  
                  // HORIZONTAL SPACING CONTROL:
                  // Increase this radius value to add more horizontal space between colored nodes
                  // Current value: 100 (increased from 60 for more horizontal spread)
                  const radius = 100;
                  
                  // Position in HORIZONTAL circle around parent (x-z plane, same y as parent)
                  node.x = parentNode.x + Math.cos(angle) * radius;
                  node.z = parentNode.z + Math.sin(angle) * radius;
                  node.y = parentNode.y; // Same y-level as parent (maintains horizontal spread at each level)
                  
                  // Fix in place strongly (fx/fy/fz = fixed x/y/z positions)
                  node.fx = node.x;
                  node.fy = parentNode.y;
                  node.fz = node.z;
                  node.vx = 0;
                  node.vy = 0;
                  node.vz = 0;
                }
              }
            }
          });
          
          // Reheat simulation briefly to settle into new positions
          graph.d3ReheatSimulation();
        }
      }, 1500);
      
      // PHASE 3 (2000ms): Freeze all nodes after positioning
      // After this point, all nodes are permanently locked in place
      setTimeout(() => {
        if (!isSimulationPausedRef.current) {
          // Freeze all node positions
          graphData.nodes.forEach((node: any) => {
            if (node.x !== undefined && node.z !== undefined) {
              let finalY = node.y || 0;
              
              // For colored nodes, ensure they're at parent's y-level
              if (node.type !== 'category') {
                const parentLink = graphData.links.find((link: any) => 
                  (link.target === node.id || (typeof link.target === 'object' && link.target.id === node.id))
                );
                if (parentLink) {
                  const parentId = typeof parentLink.source === 'object' ? parentLink.source.id : parentLink.source;
                  const parentNode = graphData.nodes.find((n: any) => n.id === parentId);
                  if (parentNode && parentNode.y !== undefined) {
                    finalY = parentNode.y;
                  }
                }
              }
              
              node.y = finalY;
              frozenNodesRef.current.set(node.id, { x: node.x, y: finalY, z: node.z });
              // Stop all velocity
              node.vx = 0;
              node.vy = 0;
              node.vz = 0;
              // Fix nodes in place permanently
              node.fx = node.x;
              node.fy = finalY;
              node.fz = node.z;
            }
          });
          
          isSimulationPausedRef.current = true;
          
          // Stop simulation
          if (graph.pauseAnimation) {
            graph.pauseAnimation();
          }
        }
      }, 2000);
    }
  }, [graphData]);

  const handleNodeClick = useCallback((node: any) => {
    if (node.url) {
      window.location.href = node.url;
    }
  }, []);

  const handleNodeHover = useCallback((node: any) => {
    const nodeId = node?.id || null;
    
    // Only update if node actually changed
    if (nodeId !== lastHoveredIdRef.current) {
      lastHoveredIdRef.current = nodeId;
      
      // Clear any pending timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      // Immediate update with no debounce - just use RAF
      requestAnimationFrame(() => {
        setHoveredNode(node || null);
      });
    }
  }, []);

  // Memoize the onEngineTick callback to prevent re-creation
  const handleEngineTick = useCallback(() => {
    // Keep colored nodes at their parent's y-level (horizontal spread at each level)
    graphData.nodes.forEach((node: any) => {
      if (node.type !== 'category') {
        // Find parent to match y-level
        const parentLink = graphData.links.find((link: any) => 
          (link.target === node.id || (typeof link.target === 'object' && link.target.id === node.id))
        );
        if (parentLink) {
          const parentId = typeof parentLink.source === 'object' ? parentLink.source.id : parentLink.source;
          const parentNode = graphData.nodes.find((n: any) => n.id === parentId);
          if (parentNode && parentNode.y !== undefined) {
            // Lock colored node to parent's y-level (horizontal at that level)
            node.y = parentNode.y;
            node.fy = parentNode.y;
            node.vy = 0;
          }
        }
      }
    });
    
    // If simulation is paused, lock all nodes in place (prevents hover jitter)
    if (isSimulationPausedRef.current) {
      graphData.nodes.forEach((node: any) => {
        const frozen = frozenNodesRef.current.get(node.id);
        if (frozen) {
          // Lock position
          node.x = frozen.x;
          node.y = frozen.y;
          node.z = frozen.z;
          // Zero all velocities
          node.vx = 0;
          node.vy = 0;
          node.vz = 0;
          // Fix in place
          node.fx = frozen.x;
          node.fy = frozen.y;
          node.fz = frozen.z;
        }
      });
    }
  }, [graphData]);

  // Memoize nodeThreeObject function with caching to prevent re-creation on hover
  const createNodeThreeObject = useCallback((node: any) => {
    // Check if we already have a cached object for this node
    const cached = nodeObjectsCache.current.get(node.id);
    if (cached) {
      return cached;
    }

    // Create new object only if not cached
    const group = new THREE.Group();
    
    // Create sphere for node - make category nodes much smaller
    const isMainNode = node.type === 'category';
    const nodeSize = isMainNode ? 4 : (node.size || 3);
    const geometry = new THREE.SphereGeometry(nodeSize, 16, 16);
    // Make category nodes more opaque than colored nodes
    const opacity = isMainNode ? 1.0 : 0.9;
    const material = new THREE.MeshLambertMaterial({
      color: node.color || nodeColors.concept,
      transparent: isMainNode ? false : true,
      opacity: opacity,
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Add text label for category nodes (black)
    const isCategory = node.type === 'category';
    
    if (isCategory) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        // Adjust font size based on layer - progressively smaller
        const fontSize = node.layer === 0 ? 48 : 
                        node.layer === 1 ? 42 : 
                        node.layer === 2 ? 36 :
                        node.layer === 3 ? 30 : 26;
        
        // Set font to measure text width
        context.font = `Bold ${fontSize}px Arial`;
        
        // Measure text width to prevent cropping
        const textMetrics = context.measureText(node.name);
        const textWidth = textMetrics.width;
        
        // Add padding to prevent cropping (20% extra on each side)
        const padding = textWidth * 0.4;
        canvas.width = Math.max(512, textWidth + padding);
        canvas.height = Math.max(128, fontSize * 2.5);
        
        // Re-set font after canvas resize (canvas resize clears context)
        context.font = `Bold ${fontSize}px Arial`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Draw only black text (no outline)
        context.fillStyle = '#000000';
        context.fillText(node.name, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        // Use Sprite which automatically faces the camera (billboard effect)
        const spriteMaterial = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true,
          opacity: 1.0,
          depthTest: false,
          depthWrite: false
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        
        // Calculate proper aspect ratio to avoid text compression
        const canvasAspect = canvas.width / canvas.height;
        
        // Scale sprites proportionally based on font size and maintain aspect ratio
        const baseHeight = fontSize * 0.3; // Scale height based on font size
        const scaleWidth = baseHeight * canvasAspect; // Maintain aspect ratio
        const scaleHeight = baseHeight;
        
        sprite.scale.set(scaleWidth, scaleHeight, 1);
        sprite.position.set(0, nodeSize + 12, 0);
        
        // Store reference for camera facing update
        sprite.userData.isLabel = true;
        
        group.add(sprite);
      }
    }

    // Cache the created object
    nodeObjectsCache.current.set(node.id, group);
    return group;
  }, []);

  // Memoize other callback functions
  const getNodeLabel = useCallback((node: any) => node.name, []);
  const getNodeVal = useCallback((node: any) => {
    const isMainNode = node.type === 'category';
    return isMainNode ? 4 : (node.size || 3);
  }, []);
  const getNodeColor = useCallback((node: any) => node.color || nodeColors.concept, []);
  const getLinkColor = useCallback(() => '#00000020', []);
  const dagNodeFilter = useCallback((node: any) => node.type === 'category', []);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ width: '100%', height: '100%', cursor: 'default' }}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ForceGraph3D
          ref={graphRef}
          graphData={graphData}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="#ffffff"
          nodeLabel={getNodeLabel}
          nodeVal={getNodeVal}
          nodeColor={getNodeColor}
          nodeOpacity={0.9}
          nodeResolution={16}
          linkColor={getLinkColor}
          linkWidth={1}
          linkOpacity={0.3}
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={2}
          linkDirectionalParticleSpeed={0.004}
          onNodeClick={handleNodeClick}
          onNodeHover={handleNodeHover}
          enableNodeDrag={false}
          enableNavigationControls={true}
          showNavInfo={false}
          enablePointerInteraction={true}
          dagMode="td"
          dagLevelDistance={150}
          warmupTicks={100}
          cooldownTicks={1000}
          dagNodeFilter={dagNodeFilter}
          d3AlphaDecay={0.015}
          d3VelocityDecay={0.6}
          onEngineTick={handleEngineTick}
          nodeThreeObject={createNodeThreeObject}
          nodeThreeObjectExtend={false}
        />
      )}
      
      {/* Hover Info Panel */}
      {hoveredNode && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-black/10 p-6 max-w-sm shadow-lg pointer-events-none">
          <h3 className="text-lg font-light mb-2">{hoveredNode.name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: hoveredNode.color || nodeColors.concept }}
            />
            <span className="text-xs font-light text-black/60 uppercase tracking-wide">
              {hoveredNode.type}
            </span>
          </div>
          {hoveredNode.description && (
            <p className="text-sm font-light text-black/70 leading-relaxed mb-3">
              {hoveredNode.description}
            </p>
          )}
          {hoveredNode.url && (
            <div className="text-xs font-light text-black/40">
              Click to visit →
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-black/10 p-4">
        <h4 className="text-sm font-light mb-3 uppercase tracking-wide">Node Types</h4>
        <div className="space-y-2">
          {Object.entries(nodeColors)
            .map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs font-light text-black/70 capitalize">
                  {type === 'blogpost' ? 'Blog Post' : type}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-black/10 px-4 py-3">
        <p className="text-xs font-light text-black/60">
          Drag to rotate • Scroll to zoom • Click nodes with links to visit
        </p>
      </div>
    </div>
  );
});

KnowledgeGraph3D.displayName = 'KnowledgeGraph3D';

export default KnowledgeGraph3D;

