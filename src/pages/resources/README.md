# Resources Subsection Pages Guide

This guide explains how to easily create and edit detailed pages for each subsection in your resources.

## File Structure

```
src/pages/resources/
├── Resources.tsx                    # Main resources landing page
├── DigitalBiology.tsx              # Digital Biology category page
├── DigitalDevices.tsx              # Digital Devices category page
├── DigitalHealth.tsx               # Digital Health category page
├── AppliedAI.tsx                   # Applied AI category page
├── HedgeFundAI.tsx                 # Hedge Fund AI category page
└── digital-biology/                # Subsection detail pages
    ├── NextGenerationSequencing.tsx
    ├── StructurePrediction.tsx
    └── [other subsection pages...]
```

## Creating a New Detailed Page

### Step 1: Create the Component File

Create a new file in the appropriate subdirectory (e.g., `src/pages/resources/digital-biology/YourNewPage.tsx`):

```tsx
import SubsectionDetail from '@/components/SubsectionDetail';

const YourNewPage = () => {
  const contentBlocks = [
    {
      type: 'text' as const,
      content: `
        <p>Your introductory text here. You can use HTML formatting.</p>
        <p>Add multiple paragraphs as needed.</p>
      `
    },
    {
      type: 'image' as const,
      content: '/path/to/your/image.jpg',
      alt: 'Description of the image',
      caption: 'Optional caption text'
    },
    {
      type: 'workflow' as const,
      content: `
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-light">1</div>
            <div>
              <h5 class="font-medium text-black/80">Step Title</h5>
              <p class="text-sm text-black/60">Step description</p>
            </div>
          </div>
          <!-- Add more steps as needed -->
        </div>
      `
    },
    {
      type: 'code' as const,
      content: `# Your code example here
echo "Hello World"
python script.py`,
      caption: "Optional code caption"
    },
    {
      type: 'list' as const,
      content: `<strong>Item 1:</strong> Description of first item
<strong>Item 2:</strong> Description of second item
<strong>Item 3:</strong> Description of third item`
    }
  ];

  return (
    <SubsectionDetail
      category="Digital Biology"
      categoryHref="/resources/digital-biology"
      title="Section Title (e.g., Genomics & Sequencing)"
      subtitle="Your Subsection Title"
      description="Brief description of what this page covers."
      lastUpdated="October 2025"
      contentBlocks={contentBlocks}
    />
  );
};

export default YourNewPage;
```

### Step 2: Add the Route

Add the new route to `src/App.tsx`:

```tsx
// Import your component
import YourNewPage from "./pages/resources/digital-biology/YourNewPage";

// Add the route in the Routes section
<Route path="/resources/digital-biology/section-title/your-subsection-title" element={<YourNewPage />} />
```

### Step 3: Update Category Page Links

The category pages (like `DigitalBiology.tsx`) automatically generate links based on the section and subsection titles. Make sure your route path matches the generated URL pattern.

## Content Block Types

### Text Block
```tsx
{
  type: 'text' as const,
  content: `<p>Your HTML content here</p>`
}
```

### Image Block
```tsx
{
  type: 'image' as const,
  content: '/path/to/image.jpg',
  alt: 'Alt text for accessibility',
  caption: 'Optional caption'
}
```

### Code Block
```tsx
{
  type: 'code' as const,
  content: `your code here`,
  caption: 'Optional code description'
}
```

### Workflow Block
```tsx
{
  type: 'workflow' as const,
  content: `<div>Your workflow HTML</div>`
}
```

### List Block
```tsx
{
  type: 'list' as const,
  content: `Item 1 description
Item 2 description
Item 3 description`
}
```

## Tips for Easy Editing

1. **Use the text type for most content** - it supports full HTML formatting
2. **Keep content blocks focused** - break long content into multiple blocks
3. **Use meaningful file names** - they become part of the URL
4. **Update lastUpdated** - helps track content freshness
5. **Test your routes** - make sure the URL pattern matches your route definition

## URL Pattern

The automatic link generation follows this pattern:
- Section title: "Genomics & Sequencing" → "genomics-and-sequencing"
- Subsection title: "Next-Generation Sequencing (NGS)" → "next-generation-sequencing-ngs"
- Full URL: `/resources/digital-biology/genomics-and-sequencing/next-generation-sequencing-ngs`

Special characters are handled:
- Spaces → hyphens (-)
- Parentheses → removed
- Ampersands (&) → "and"
- Everything lowercase

## Adding Images

1. Place images in the `public` folder
2. Reference them with `/path/to/image.jpg`
3. For placeholder images during development, use `/api/placeholder/width/height`

## Next Steps

To complete the system:
1. Create subdirectories for other categories (digital-devices, digital-health, etc.)
2. Add more example pages
3. Create a content management interface (optional)
4. Add search functionality across all detailed pages
