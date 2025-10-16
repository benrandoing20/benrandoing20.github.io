import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ContentBlock {
  type: 'text' | 'image' | 'code' | 'workflow' | 'list';
  content: string;
  caption?: string;
  alt?: string;
}

interface SubsectionDetailProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  description: string;
  lastUpdated?: string;
  contentBlocks: ContentBlock[];
}

const SubsectionDetail = ({ 
  category, 
  categoryHref, 
  title, 
  subtitle, 
  description, 
  lastUpdated,
  contentBlocks 
}: SubsectionDetailProps) => {
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="prose prose-lg max-w-none">
            <div 
              className="text-base font-light text-black/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className="my-12">
            <img 
              src={block.content} 
              alt={block.alt || subtitle}
              className="w-full rounded-lg border border-black/10"
            />
            {block.caption && (
              <p className="text-sm font-light text-black/60 mt-4 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case 'code':
        return (
          <div key={index} className="my-8">
            <pre className="bg-black/5 p-6 rounded-lg overflow-x-auto border border-black/10">
              <code className="text-sm font-mono text-black/80">
                {block.content}
              </code>
            </pre>
            {block.caption && (
              <p className="text-sm font-light text-black/60 mt-2 italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case 'workflow':
        return (
          <div key={index} className="my-12 p-8 bg-black/2 border border-black/10 rounded-lg">
            <h4 className="text-lg font-light mb-6 text-black/80">Workflow</h4>
            <div 
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className="my-8">
            <ul className="space-y-3">
              {block.content.split('\n').map((item, itemIndex) => (
                <li key={itemIndex} className="text-base font-light text-black/80 leading-relaxed flex items-start">
                  <span className="mr-3 text-black/40">•</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        );
      
      default:
        return null;
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
          <div className="space-y-8">
            {contentBlocks.map((block, index) => renderContentBlock(block, index))}
          </div>

          {/* Edit Note */}
          <div className="mt-20 p-6 bg-black/2 border border-black/10 rounded-lg">
            <p className="text-sm font-light text-black/60 italic">
              💡 This page is easily editable - simply modify the contentBlocks array in the corresponding component file to add text, images, workflows, code examples, and more.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubsectionDetail;
