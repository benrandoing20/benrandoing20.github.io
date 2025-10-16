# How to Edit Thoughts (Blog Posts)

This guide explains how to easily manage your thoughts/blog posts by editing a single file.

## Quick Start

All your thoughts are stored in **`src/data/thoughts.ts`** - that's the only file you need to edit!

## Adding a New Thought

1. Open `src/data/thoughts.ts`
2. Add a new object to the `thoughts` array:

```typescript
{
  id: "unique-url-friendly-id",
  title: "Your Thought Title",
  date: "Month Year",
  readTime: "X min",
  excerpt: "A brief summary that appears on the main page (1-2 sentences)",
  content: `Your full content here...`
}
```

## Writing Content

The `content` field uses simple text with minimal formatting:

### Headings
```
## Your Heading
```

### Bold Text (for sub-headings or emphasis)
```
**Important Point:** Your text here
```

### Paragraphs
Just write normally! Separate paragraphs with blank lines:
```
First paragraph here.

Second paragraph here.
```

### Complete Example

```typescript
{
  id: "my-new-thought",
  title: "Building Better AI Systems",
  date: "April 2024",
  readTime: "6 min",
  excerpt: "Lessons learned from deploying AI in production environments and what I'd do differently.",
  content: `Building AI systems that work in production is fundamentally different from research prototypes.

## Key Differences

**Robustness:** Production systems need to handle edge cases gracefully. A model that works 99% of the time can still fail catastrophically on the 1% of cases it hasn't seen.

**Monitoring:** You need comprehensive logging and alerting. Silent failures are the worst kind of failures in production AI.

## What I Learned

The most important lesson: start simple. Don't jump to complex architectures until you've exhausted simpler solutions. A well-tuned logistic regression often outperforms a poorly implemented neural network.

Another key insight: invest heavily in data quality. The best model trained on bad data will perform worse than a simple model trained on clean data.

## Moving Forward

These lessons have shaped how I approach every new AI project. Start with baselines, prioritize data quality, and add complexity only when necessary.`
}
```

## Editing Existing Thoughts

Simply find the thought object by its `id` or `title` and edit any field:
- Update the `content` to revise the post
- Change the `title` or `excerpt` to improve clarity
- Adjust the `date` or `readTime` as needed

## Important Notes

1. **ID must be unique** - each thought needs a different `id`
2. **ID format** - use lowercase with dashes (e.g., "my-thought-title")
3. **Content formatting** - Use blank lines between paragraphs for proper spacing
4. **Quotes** - Use backticks (\`) for the content field to allow multi-line text

## No Build Step Needed

After editing the file:
1. Save your changes
2. The dev server will automatically reload
3. Your changes appear instantly!

## Tips for Great Content

- **Start with a strong excerpt** - this is what people see first
- **Use headings** to break up long content
- **Keep paragraphs focused** - one main idea per paragraph
- **Use bold text** for emphasis or sub-headings
- **Write conversationally** - it's more engaging

## Example Workflow

1. Open `src/data/thoughts.ts` in your editor
2. Copy an existing thought object as a template
3. Update the `id`, `title`, `date`, `readTime`, and `excerpt`
4. Write your content in the `content` field
5. Save the file
6. Check it in your browser at `http://localhost:8081/`

That's it! No complex CMS, no database, just simple file editing.

