import { Link } from 'react-router-dom';
import { thoughts } from '@/data/thoughts';

const Blog = () => {
  return (
    <section id="thoughts" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Thoughts
          </h2>
          <div className="w-16 h-px bg-black/20 mb-6"></div>
          <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
            Here's what I've been thinking about lately
          </p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-6 min-w-max">
              {thoughts.map((thought) => (
                <Link
                  key={thought.id}
                  to={`/thought/${thought.id}`}
                  className="group w-80 flex-shrink-0 border border-black/10 p-6 hover:border-black/30 transition-all duration-300 bg-white"
                >
                  <div className="text-xs font-light text-black/40 tracking-wide mb-4">
                    {thought.date} • {thought.readTime}
                  </div>
                  
                  <h3 className="text-lg font-light mb-4 group-hover:text-black/70 transition-colors duration-300 leading-snug">
                    {thought.title}
                  </h3>
                  
                  <p className="text-sm font-light text-black/60 leading-relaxed line-clamp-4">
                    {thought.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <div className="flex items-center gap-2 text-black/40 group-hover:text-black/70 transition-colors">
                      <span className="text-xs font-light tracking-wide">Read more</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-4">
            <p className="text-xs font-light text-black/40 tracking-wide">
              ← Scroll to explore →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
