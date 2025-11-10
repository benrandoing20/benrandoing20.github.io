import { useState } from 'react';

interface TimelineEvent {
  date: string;
  year: number;
  title: string;
  description: string;
  category: 'technology' | 'regulation' | 'market' | 'innovation';
  url?: string;
}

interface IndustryTimelineProps {
  events: TimelineEvent[];
}

const IndustryTimeline = ({ events }: IndustryTimelineProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categoryColors = {
    technology: '#3B82F6',
    regulation: '#EF4444',
    market: '#10B981',
    innovation: '#8B5CF6',
  };

  // Sort events by year
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className="mb-16">
      <div className="mb-6">
              <h3 className="text-lg font-light tracking-tight mb-2">
                Recent Industry Developments
              </h3>
              <p className="text-sm font-light text-black/60 leading-relaxed">
                Latest product launches, tool releases, and institutional adoption of AI in hedge funds
              </p>
      </div>

      {/* Compact Timeline */}
      <div className="relative">
        <div className="overflow-x-auto overflow-y-visible pb-6 scrollbar-hide -mx-8 px-8" style={{ paddingTop: '200px', paddingBottom: '200px', marginTop: '-200px', marginBottom: '-200px' }}>
          <div className="relative" style={{ minWidth: `${sortedEvents.length * 140 + 240}px`, height: '240px', paddingLeft: '140px', paddingRight: '140px' }}>
            {/* Main horizontal line */}
            <div className="absolute top-28 left-20 right-20 h-px bg-black/20" />
            
            {sortedEvents.map((event, index) => {
              const isTop = index % 2 === 0;
              const xPosition = index * 140 + 140;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{ 
                    left: `${xPosition}px`,
                    top: isTop ? '60px' : '100px'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Vertical branch line */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 w-px transition-all duration-200"
                    style={{ 
                      height: '48px',
                      top: isTop ? '48px' : '0px',
                      backgroundColor: hoveredIndex === index ? categoryColors[event.category] : 'rgba(0,0,0,0.15)'
                    }}
                  />
                  
                  {/* Node dot */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-200 cursor-pointer z-10"
                    style={{ 
                      width: hoveredIndex === index ? '12px' : '8px',
                      height: hoveredIndex === index ? '12px' : '8px',
                      top: isTop ? '40px' : '48px',
                      backgroundColor: categoryColors[event.category],
                      boxShadow: hoveredIndex === index ? `0 0 0 4px ${categoryColors[event.category]}30` : 'none',
                      border: '2px solid white'
                    }}
                  />
                  
                  {/* Year and Title */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 text-center transition-all duration-200 ${
                      event.url ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    style={{ 
                      top: isTop ? '96px' : '-44px',
                      width: '120px'
                    }}
                    onClick={() => event.url && window.open(event.url, '_blank')}
                  >
                    <div className="text-[10px] font-medium text-black/40 mb-1.5">
                      {event.year}
                    </div>
                    <div 
                      className={`text-[11px] font-light leading-snug transition-colors duration-200 ${
                        hoveredIndex === index ? 'text-black font-normal' : 'text-black/70'
                      }`}
                    >
                      {event.title}
                    </div>
                  </div>
                  
                  {/* Hover tooltip - with improved positioning */}
                  {hoveredIndex === index && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in duration-200"
                      style={{ 
                        top: isTop ? '160px' : '-200px',
                        width: '280px'
                      }}
                    >
                      <div className="bg-white border border-black/20 shadow-xl rounded-sm p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div 
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: categoryColors[event.category] }}
                          />
                          <span className="text-[10px] font-medium text-black/50 uppercase tracking-wider">
                            {event.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-normal mb-2.5 leading-snug text-black">
                          {event.title}
                        </h4>
                        <p className="text-xs font-light text-black/70 leading-relaxed">
                          {event.description}
                        </p>
                        {event.url && (
                          <div className="mt-3 pt-3 border-t border-black/10">
                            <div className="text-[10px] font-light text-black/40 italic">
                              Click event to view article ↗
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Tooltip arrow */}
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-black/20 transform rotate-45"
                        style={{ 
                          [isTop ? 'top' : 'bottom']: '-5px',
                          [isTop ? 'borderTop' : 'borderBottom']: '1px solid',
                          [isTop ? 'borderLeft' : 'borderRight']: '1px solid',
                          borderColor: 'rgba(0,0,0,0.2)'
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-2">
          <p className="text-xs font-light text-black/40 tracking-wide">
            ← Scroll through timeline →
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryTimeline;

