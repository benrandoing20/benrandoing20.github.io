export type NodeType = 'category' | 'topic' | 'concept' | 'company' | 'blogpost' | 'resource';

export interface GraphNode {
  id: string;
  name: string;
  type: NodeType;
  description?: string;
  url?: string;
  layer: number; // Hierarchy level: 0 = top, higher = deeper
  color?: string;
  size?: number;
}

export interface GraphLink {
  source: string;
  target: string;
  strength?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Color scheme for different node types
export const nodeColors: Record<NodeType, string> = {
  category: '#a1a1aa',     // Medium-dark gray - Top level categories (readable with black text)
  topic: '#d4d4d8',        // Light gray - Sub topics (readable with black text)
  concept: '#8b5cf6',      // Purple - Technical concepts
  company: '#10b981',      // Green - Companies
  blogpost: '#f59e0b',     // Amber - Blog posts
  resource: '#ef4444',     // Red - External resources
};

// Size mapping based on layer (hierarchy)
export const getNodeSize = (layer: number, nodeType?: NodeType): number => {
  // Categories and topics should be progressively smaller with each layer
  if (nodeType === 'category' || nodeType === 'topic') {
    // More aggressive size reduction for each layer
    // Layer 0: Root (28), Layer 1: Main (22), Layer 2: Sub (16), Layer 3: Detail (12), Layer 4: Specific (9), Layer 5+: (7)
    if (layer === 0) return 28;
    if (layer === 1) return 22;
    if (layer === 2) return 16;
    if (layer === 3) return 12;
    if (layer === 4) return 9;
    if (layer === 5) return 7;
    return 6;
  }
  // Colored nodes (concept, company, etc.) are much smaller
  return 2.5;
};

