import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to generate heading IDs from text
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper function to parse markdown links [text](url)
export function parseMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-black underline hover:text-black/70 transition-colors">$1</a>');
}

// Helper function to extract and mark math expressions for rendering
export function extractMathExpressions(text: string): { text: string; math: { type: 'inline' | 'display'; content: string; placeholder: string }[] } {
  const mathExpressions: { type: 'inline' | 'display'; content: string; placeholder: string }[] = [];
  let processedText = text;
  
  // Process display math \[ \] first
  processedText = processedText.replace(/\\\[([\s\S]*?)\\\]/g, (match, content) => {
    const placeholder = `__MATH_DISPLAY_${mathExpressions.length}__`;
    mathExpressions.push({ type: 'display', content: content.trim(), placeholder });
    return placeholder;
  });
  
  // Process inline math \( \)
  processedText = processedText.replace(/\\\(([\s\S]*?)\\\)/g, (match, content) => {
    const placeholder = `__MATH_INLINE_${mathExpressions.length}__`;
    mathExpressions.push({ type: 'inline', content: content.trim(), placeholder });
    return placeholder;
  });
  
  return { text: processedText, math: mathExpressions };
}

// Simple content parser for easy content creation
export function parseSimpleContent(content: string) {
  const sections = content.trim().split('\n\n');
  const blocks: any[] = [];
  
  let i = 0;
  while (i < sections.length) {
    const section = sections[i].trim();
    
    // Skip empty sections
    if (!section) {
      i++;
      continue;
    }
    
    // Handle code blocks
    if (section.startsWith('```')) {
      const language = section.replace('```', '').trim();
      let codeContent = '';
      i++;
      
      // Collect code content until closing ```
      while (i < sections.length && !sections[i].includes('```')) {
        codeContent += sections[i] + '\n\n';
        i++;
      }
      
      // Remove the closing ``` if present
      if (i < sections.length) {
        const lastSection = sections[i].replace('```', '').trim();
        if (lastSection) {
          codeContent += lastSection;
        }
      }
      
      blocks.push({
        type: 'code',
        content: codeContent.trim(),
        language: language || 'text'
      });
      
      i++;
      continue;
    }
    
    // Handle headings
    if (section.startsWith('##')) {
      const headingText = section.replace(/^#+\s*/, '');
      blocks.push({
        type: 'heading',
        content: headingText,
        id: generateHeadingId(headingText),
        level: section.match(/^#+/)?.[0].length || 2
      });
      i++;
      continue;
    }
    
    // Handle bullet lists
    if (section.includes('\n•') || section.includes('\n-') || section.startsWith('•') || section.startsWith('-')) {
      const items = section
        .split('\n')
        .filter(line => line.trim().startsWith('•') || line.trim().startsWith('-'))
        .map(line => {
          const cleaned = line.replace(/^[•-]\s*/, '').trim();
          const { text: processedText, math } = extractMathExpressions(cleaned);
          return {
            content: parseMarkdownLinks(processedText),
            math: math
          };
        });
      
      blocks.push({
        type: 'list',
        items: items
      });
      
      i++;
      continue;
    }
    
    // Handle workflow (numbered lists)
    if (section.match(/^\d+\./m)) {
      const steps = section
        .split('\n')
        .filter(line => line.match(/^\d+\./))
        .map(line => {
          const match = line.match(/^(\d+)\.\s*(.+)/);
          return match ? {
            number: match[1],
            content: match[2]
          } : null;
        })
        .filter(Boolean);
      
      if (steps.length > 0) {
        blocks.push({
          type: 'workflow',
          steps: steps
        });
        i++;
        continue;
      }
    }
    
    // Default to text (with markdown link parsing and math extraction)
    const { text: processedText, math } = extractMathExpressions(section);
    blocks.push({
      type: 'text',
      content: parseMarkdownLinks(processedText),
      math: math
    });
    
    i++;
  }
  
  return blocks;
}
