# Knowledge Graph Data Management

This guide explains how to easily update and maintain the 3D knowledge graph visualizations for each resource category.

## Overview

Each resource page (Applied AI, Health AI, Hedge Fund AI) has its own knowledge graph data file that defines the nodes and links in the visualization.

## File Structure

```
src/data/graphs/
├── appliedAIGraph.ts      # Applied AI knowledge graph
├── healthAIGraph.ts       # Health AI knowledge graph
├── hedgeFundAIGraph.ts    # Hedge Fund AI knowledge graph
└── README.md              # This file
```

## Node Types

The graph supports six different node types, each with a distinct color:

- **category** (Black) - Top-level categories (root nodes)
- **topic** (Blue) - Main topics and sections
- **concept** (Purple) - Technical concepts and ideas
- **company** (Green) - Companies and organizations
- **blogpost** (Amber) - Blog posts and articles
- **resource** (Red) - External resources and papers

## Hierarchy Layers

Nodes are organized in layers to create a hierarchical structure:

- **Layer 0** - Root category (largest node)
- **Layer 1** - Main topics
- **Layer 2** - Concepts and subtopics
- **Layer 3** - Companies, blog posts, and resources (smallest nodes)
- **Layer 4+** - Additional depth as needed

**Important:** Nodes at higher layers (lower numbers) appear larger in the visualization.

## Adding a New Node

To add a new node to any graph, add it to the `nodes` array:

```typescript
{
  id: 'unique-id',              // Unique identifier (lowercase, hyphenated)
  name: 'Display Name',         // Name shown in the visualization
  type: 'concept',              // One of: category, topic, concept, company, blogpost, resource
  layer: 2,                     // Hierarchy level (0 = top)
  description: 'Description',   // Shown on hover
  url: 'https://example.com',   // Optional: Link when clicked
  color: nodeColors.concept,    // Auto-set based on type
  size: getNodeSize(2)          // Auto-set based on layer
}
```

## Adding Connections (Links)

To connect two nodes, add a link to the `links` array:

```typescript
{
  source: 'parent-node-id',     // ID of the source node
  target: 'child-node-id',      // ID of the target node
  strength: 0.8                 // Optional: Link strength (0-1)
}
```

**Tips:**
- Links from parent to direct child: use strength 0.8-1.0
- Cross-connections between concepts: use strength 0.5-0.7
- Weak relationships: use strength 0.3-0.5

## Example: Adding a New Concept

Let's say you want to add "Edge AI" as a new concept under "Production & Deployment" in Applied AI:

### Step 1: Add the node

```typescript
// In appliedAIGraph.ts, add to the nodes array:
{
  id: 'edge-ai',
  name: 'Edge AI',
  type: 'concept',
  layer: 2,
  description: 'Running AI models on edge devices with low latency',
  color: nodeColors.concept,
  size: getNodeSize(2)
}
```

### Step 2: Add connections

```typescript
// In the links array:
{ source: 'production', target: 'edge-ai', strength: 0.8 }

// Optional cross-connections to related concepts:
{ source: 'edge-ai', target: 'scaling', strength: 0.6 }
```

## Example: Adding a Company

To add a company like "NVIDIA" (if not already present):

```typescript
// Add to nodes:
{
  id: 'nvidia',
  name: 'NVIDIA',
  type: 'company',
  layer: 3,
  description: 'GPU computing and AI infrastructure',
  url: 'https://nvidia.com',
  color: nodeColors.company,
  size: getNodeSize(3)
}

// Link to relevant concept:
{ source: 'scaling', target: 'nvidia', strength: 0.6 }
```

## Example: Adding a Blog Post

To add your own blog post to the graph:

```typescript
// Add to nodes:
{
  id: 'my-blog-post-slug',
  name: 'My Blog Post Title',
  type: 'blogpost',
  layer: 3,
  description: 'Brief description of the blog post',
  url: '/blog/my-blog-post-slug',  // Internal link to your blog
  color: nodeColors.blogpost,
  size: getNodeSize(3)
}

// Link to relevant concept:
{ source: 'relevant-concept-id', target: 'my-blog-post-slug', strength: 0.7 }
```

## Best Practices

### Organization
1. Keep the root category at layer 0
2. Main topics at layer 1
3. Concepts at layer 2
4. Companies/resources/blogs at layer 3+

### Connections
1. Always connect nodes to at least one parent
2. Use cross-connections to show relationships between concepts
3. Don't create too many connections (clutters the visualization)
4. Aim for 1-5 connections per node

### Naming
1. Use clear, concise names for nodes
2. IDs should be lowercase and hyphenated
3. Keep descriptions under 100 characters

### Data Structure
1. Group related nodes together in the file for readability
2. Add comments to separate different sections
3. Keep the value chain structure clear (research → development → deployment)

## Value Chain Structure

For each domain, organize nodes following the value chain:

### Health AI Example:
```
Research → Clinical Trials → Treatment → Monitoring → Operations
```

### Hedge Fund AI Example:
```
Data Collection → Strategy Development → Execution → Risk Management → Compliance
```

### Applied AI Example:
```
Foundations → Model Development → Training → Deployment → Monitoring
```

## Updating Multiple Categories

If you have information that spans multiple categories, add it to each relevant graph file with appropriate connections to that domain's concepts.

## Testing Your Changes

After making changes:

1. Save the file
2. The development server will auto-reload
3. Navigate to the resource page
4. Click "Knowledge Graph" to view your changes
5. Hover over nodes to verify descriptions
6. Click linked nodes to test URLs

## Common Issues

### Node not appearing?
- Check that the ID is unique
- Verify the node is in the `nodes` array
- Ensure the graph is imported correctly

### Link not showing?
- Verify both source and target IDs exist
- Check for typos in node IDs
- Ensure IDs match exactly (case-sensitive)

### Layout looks cluttered?
- Reduce the number of cross-connections
- Adjust layer assignments
- Consider breaking up large layer groups

## Need Help?

The graph data structure is defined in `/src/types/graphData.ts`. Refer to this file for the complete TypeScript interfaces and available options.

