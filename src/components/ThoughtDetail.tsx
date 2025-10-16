import { useParams, Link } from 'react-router-dom';
import { thoughts } from '@/data/thoughts';
import { ArrowLeft } from 'lucide-react';

const ThoughtDetail = () => {
  const { id } = useParams();
  const thought = thoughts.find(t => t.id === id);

  if (!thought) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Thought not found</h1>
          <Link to="/" className="text-black/60 hover:text-black">Return home</Link>
        </div>
      </div>
    );
  }

  // Simple content parser that preserves paragraphs and basic formatting
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('## ')) {
        // Heading
        elements.push(
          <h2 key={key++} className="text-2xl font-light mb-6 mt-12 tracking-tight first:mt-0">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        // Bold paragraph heading
        const text = trimmed.slice(2, -2);
        elements.push(
          <h3 key={key++} className="text-lg font-medium mb-3 mt-8 text-black/90">
            {text}
          </h3>
        );
      } else if (trimmed === '') {
        // Empty line - add spacing
        if (elements.length > 0) {
          elements.push(<div key={key++} className="h-4"></div>);
        }
      } else {
        // Regular paragraph
        // Handle inline bold text
        const parts = trimmed.split(/(\*\*.*?\*\*)/g);
        const formatted = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-medium text-black">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        
        elements.push(
          <p key={key++} className="text-lg font-light text-black/70 leading-relaxed mb-6">
            {formatted}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <Link to="/" className="inline-flex items-center text-black/70 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <div className="text-xs font-light text-black/40 mb-4 tracking-wider uppercase">
              Thought • {thought.date} • {thought.readTime}
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight mb-8 tracking-tight leading-tight">
              {thought.title}
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
          </div>

          <article className="prose prose-lg max-w-none">
            {renderContent(thought.content)}
          </article>
        </div>
      </main>
    </div>
  );
};

export default ThoughtDetail;

