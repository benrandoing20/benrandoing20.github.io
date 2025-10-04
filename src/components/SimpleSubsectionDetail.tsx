import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { parseSimpleContent } from '@/lib/utils';

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
  
  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${Math.min(block.level, 6)}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: 'text-4xl font-light mb-8 mt-12 tracking-tight',
          2: 'text-3xl font-light mb-6 mt-10 tracking-tight',
          3: 'text-2xl font-light mb-4 mt-8 tracking-tight',
          4: 'text-xl font-light mb-3 mt-6 tracking-tight',
          5: 'text-lg font-light mb-2 mt-4 tracking-tight',
          6: 'text-base font-medium mb-2 mt-4 tracking-tight'
        }[block.level] || 'text-lg font-light mb-3 mt-6';
        
        return (
          <HeadingTag key={index} className={headingClasses}>
            {block.content}
          </HeadingTag>
        );
      
      case 'code':
        return (
          <div key={index} className="my-8">
            <pre className="bg-black/5 p-6 rounded-lg overflow-x-auto border border-black/10">
              <code className="text-sm font-mono text-black/80">
                {block.content}
              </code>
            </pre>
          </div>
        );
      
      case 'list':
        return (
          <ul key={index} className="my-8 space-y-3">
            {block.items.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="text-base font-light text-black/80 leading-relaxed flex items-start">
                <span className="mr-3 text-black/40 mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      
      case 'workflow':
        return (
          <div key={index} className="my-12 p-8 bg-black/2 border border-black/10 rounded-lg">
            <h4 className="text-lg font-light mb-6 text-black/80">Workflow</h4>
            <div className="space-y-4">
              {block.steps.map((step: any, stepIndex: number) => (
                <div key={stepIndex} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-light flex-shrink-0 mt-1">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-light text-black/80 leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'text':
      default:
        // Handle bold text and line breaks
        const formattedText = block.content
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .split('\n')
          .filter((line: string) => line.trim())
          .map((paragraph: string, pIndex: number) => (
            <p key={pIndex} className="text-base font-light text-black/80 leading-relaxed mb-4">
              <span dangerouslySetInnerHTML={{ __html: paragraph }} />
            </p>
          ));
        
        return (
          <div key={index} className="my-6">
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

          {/* Edit Note */}
          <div className="mt-20 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-light text-green-800">
              ✨ <strong>Super Easy Editing!</strong> Just modify the content string above using simple text formatting:
            </p>
            <ul className="text-xs font-light text-green-700 mt-2 space-y-1">
              <li>• Regular paragraphs (just write normally)</li>
              <li>• <code>## Headings</code> for section titles</li>
              <li>• <code>• Bullet points</code> for lists</li>
              <li>• <code>**Bold text**</code> for emphasis</li>
              <li>• <code>```language</code> for code blocks</li>
              <li>• <code>1. Step one</code> for numbered workflows</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimpleSubsectionDetail;
