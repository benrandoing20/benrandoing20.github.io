import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { parseSimpleContent } from '@/lib/utils';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface SimpleSubsectionDetailProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated?: string;
  content: string; // Just a simple string with markdown-like formatting!
}

const SimpleSubsectionDetail = ({ 
  category, 
  categoryHref, 
  title, 
  subtitle, 
  description, 
  lastUpdated,
  content 
}: SimpleSubsectionDetailProps) => {
  
  const contentBlocks = parseSimpleContent(content);
  
  // Helper function to render math in text
  const renderTextWithMath = (text: string, mathExpressions: any[] = []) => {
    let processedHtml = text;
    
    // Replace math placeholders with rendered KaTeX HTML
    mathExpressions.forEach((mathExpr) => {
      try {
        const rendered = katex.renderToString(mathExpr.content, {
          displayMode: mathExpr.type === 'display',
          throwOnError: false,
          trust: false,
          strict: false
        });
        // Wrap display math in a centered div
        const wrappedRendered = mathExpr.type === 'display' 
          ? `<div class="katex-display-wrapper" style="text-align: center; margin: 1.5rem 0;">${rendered}</div>`
          : rendered;
        processedHtml = processedHtml.replace(mathExpr.placeholder, wrappedRendered);
      } catch (e) {
        console.error('KaTeX rendering error:', e);
        processedHtml = processedHtml.replace(mathExpr.placeholder, mathExpr.content);
      }
    });
    
    return processedHtml;
  };
  
  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'math':
        try {
          const rendered = katex.renderToString(block.content, {
            displayMode: block.displayMode || false,
            throwOnError: false,
            trust: false,
            strict: false
          });
          return (
            <div key={index} className="my-6 text-center">
              <div dangerouslySetInnerHTML={{ __html: rendered }} />
            </div>
          );
        } catch (e) {
          console.error('KaTeX rendering error:', e);
          return (
            <div key={index} className="my-6 p-4 bg-red-50 border border-red-200 rounded">
              <code className="text-sm text-red-700">Error rendering math: {block.content}</code>
            </div>
          );
        }
      
      case 'heading':
        const HeadingTag = `h${Math.min(block.level, 6)}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-4xl font-light mb-6 mt-12 tracking-tight',
          2: 'text-3xl font-light mb-5 mt-10 tracking-tight',
          3: 'text-2xl font-light mb-4 mt-8 tracking-tight',
          4: 'text-xl font-light mb-3 mt-7 tracking-tight',
          5: 'text-lg font-light mb-2.5 mt-6 tracking-tight',
          6: 'text-base font-medium mb-2 mt-5 tracking-tight'
        }[block.level] || 'text-lg font-light mb-3 mt-6';
        
        return (
          <HeadingTag key={index} id={block.id} className={headingClasses}>
            {block.content}
          </HeadingTag>
        );
      
      case 'code':
        return (
          <div key={index} className="my-6">
            <pre className="bg-black/5 p-6 rounded-lg overflow-x-auto border border-black/10">
              <code className="text-sm font-mono text-black/80">
                {block.content}
              </code>
            </pre>
          </div>
        );
      
      case 'list':
        // Recursive function to render nested lists
        const renderListItem = (item: any, itemIndex: number, level: number = 0): JSX.Element => {
          const itemContent = typeof item === 'string' ? item : item.content;
          const itemMath = typeof item === 'string' ? [] : item.math || [];
          const processedContent = renderTextWithMath(itemContent, itemMath).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          const hasNested = item.nested && item.nested.length > 0;
          
          return (
            <li key={itemIndex} className="text-base font-light text-black/80 leading-relaxed">
              <div className="flex items-start">
                <span className="mr-3 text-black/40 mt-0.5 flex-shrink-0">•</span>
                <div className="flex-1">
                  <span dangerouslySetInnerHTML={{ __html: processedContent }} />
                  {hasNested && (
                    <ul className="mt-2 space-y-1.5 ml-6">
                      {item.nested.map((nestedItem: any, nestedIndex: number) => 
                        renderListItem(nestedItem, nestedIndex, level + 1)
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        };
        
        return (
          <ul key={index} className="my-4 space-y-1.5 ml-6">
            {block.items.map((item: any, itemIndex: number) => renderListItem(item, itemIndex))}
          </ul>
        );
      
      case 'workflow':
        return (
          <ol key={index} className="my-4 space-y-1.5 ml-6 list-decimal list-outside pl-4">
            {block.steps.map((step: any, stepIndex: number) => {
              const stepContent = typeof step === 'string' ? step : step.content;
              const stepMath = typeof step === 'string' ? [] : step.math || [];
              const processedContent = renderTextWithMath(stepContent, stepMath).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              
              return (
                <li key={stepIndex} className="text-base font-light text-black/80 leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: processedContent }} />
                </li>
              );
            })}
          </ol>
        );
      
      case 'text':
      default:
        // Handle bold text, line breaks, and math
        const textWithMath = renderTextWithMath(block.content, block.math || []);
        const formattedText = textWithMath
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .split('\n')
          .filter((line: string) => line.trim())
          .map((paragraph: string, pIndex: number) => (
            <p key={pIndex} className="text-base font-light text-black/80 leading-relaxed mb-3">
              <span dangerouslySetInnerHTML={{ __html: paragraph }} />
            </p>
          ));
        
        return (
          <div key={index} className="my-4">
            {formattedText}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="mb-12">
            <div className="flex items-center text-sm font-light text-black/60 space-x-2 mb-8">
              <Link to="/resources" className="hover:text-black transition-colors duration-300">
                Resources
              </Link>
              <span>→</span>
              <Link to={categoryHref} className="hover:text-black transition-colors duration-300">
                {category}
              </Link>
              <span>→</span>
              <span className="text-black/80">{subtitle}</span>
            </div>
            
            <Link 
              to={categoryHref}
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back to {category}
            </Link>
          </div>

          {/* Header */}
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-sm font-light text-black/40 tracking-wide uppercase">
                {title}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extralight mb-8 tracking-tight leading-tight">
              {subtitle}
            </h1>
            
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            
            <p className="text-xl font-light text-black/60 leading-relaxed max-w-3xl">
              {description}
            </p>
            
            {lastUpdated && (
              <p className="text-sm font-light text-black/40 mt-6">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {contentBlocks.map((block, index) => renderBlock(block, index))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimpleSubsectionDetail;
