import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
      blocks.push({
        type: 'heading',
        content: section.replace(/^#+\s*/, ''),
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
        .map(line => line.replace(/^[•-]\s*/, '').trim());
      
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
    
    // Default to text
    blocks.push({
      type: 'text',
      content: section
    });
    
    i++;
  }
  
  return blocks;
}
