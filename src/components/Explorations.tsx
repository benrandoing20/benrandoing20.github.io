
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { explorations, explorationCategories } from '@/data/explorations';

const Explorations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExplorations = selectedCategory === "All" 
    ? explorations 
    : explorations.filter(exploration => exploration.category === selectedCategory);

  return (
    <section id="explorations" className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Technical Explorations
          </h2>
          <p className="text-base font-light text-black/60 mb-6 leading-relaxed max-w-3xl">
            Professional-caliber projects demonstrating technical competence and expertise. 
            These explorations showcase business-ready capabilities and serve as portfolio work samples.
          </p>
          <div className="w-16 h-px bg-black/20 mb-8"></div>
          
          {/* Category Filter */}
          <div className="overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-3 min-w-max">
              {explorationCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm font-light tracking-wide border transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-black text-white border-black'
                      : 'border-black/20 text-black/70 hover:border-black hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-6 min-w-max">
              {filteredExplorations.map((exploration) => (
                <Link
                  key={exploration.id}
                  to={`/exploration/${exploration.id}`}
                  className="group w-96 flex-shrink-0 border border-black/10 hover:border-black/30 transition-all duration-300 bg-white cursor-pointer overflow-hidden"
                >
                  {/* Thumbnail Image */}
                  {exploration.thumbnail && (
                    <div className="w-full h-48 overflow-hidden border-b border-black/5 bg-gray-50/50 flex items-center justify-center">
                      <img 
                        src={exploration.thumbnail} 
                        alt={exploration.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xs font-light text-black/40 tracking-wider uppercase">
                        {exploration.category} • {exploration.year}
                      </div>
                      <div className={`px-2 py-1 text-xs font-light tracking-wide ${
                        exploration.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                        exploration.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}>
                        {exploration.status}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-light mb-2 group-hover:text-black/70 transition-colors duration-300 leading-snug">
                      {exploration.title}
                    </h3>
                    
                    <p className="text-xs font-light text-black/50 mb-3">
                      {exploration.role} • {exploration.duration}
                    </p>
                    
                    <p className="text-sm font-light text-black/60 leading-relaxed mb-4 line-clamp-3">
                      {exploration.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exploration.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs font-light text-black/50 border border-black/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {exploration.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-light text-black/40">
                          +{exploration.technologies.length - 3}
                        </span>
                      )}
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

export default Explorations;

