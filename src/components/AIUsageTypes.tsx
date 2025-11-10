import { useState } from 'react';

interface AIApplication {
  name: string;
  description: string;
  color: string;
  category: string;
}

interface AIUsageTypesProps {
  applications: AIApplication[];
  title?: string;
  subtitle?: string;
}

const AIUsageTypes = ({ applications, title = "AI Tech + Application Combinations", subtitle = "Specific AI technologies applied to hedge fund use cases" }: AIUsageTypesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Group applications by category
  const groupedApps = applications.reduce((acc, app, index) => {
    if (!acc[app.category]) {
      acc[app.category] = [];
    }
    acc[app.category].push({ ...app, originalIndex: index });
    return acc;
  }, {} as Record<string, Array<AIApplication & { originalIndex: number }>>);

  const categories = Object.keys(groupedApps);
  
  return (
    <div className="mb-16">
      <div className="mb-6">
        <h3 className="text-lg font-light tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm font-light text-black/60 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Grouped Bubbles by Category */}
      <div className="relative">
        <div className="overflow-x-auto pb-6 scrollbar-hide -mx-8 px-8">
          <div className="inline-flex gap-8 py-4">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="flex-shrink-0">
                {/* Category Label */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-black/50 uppercase tracking-wider">
                    {category}
                  </h4>
                </div>
                
                {/* Bubbles for this category in offset grid */}
                <div className="inline-block">
                  {[0, 1, 2].map((rowIndex) => {
                    const isEvenRow = rowIndex % 2 === 0;
                    const rowApps = groupedApps[category].slice(rowIndex * 2, (rowIndex + 1) * 2);
                    
                    if (rowApps.length === 0) return null;
                    
                    return (
                      <div 
                        key={rowIndex}
                        className="flex gap-3 mb-3"
                        style={{ marginLeft: isEvenRow ? '0' : '35px' }}
                      >
                        {rowApps.map((app) => (
                          <div
                            key={app.originalIndex}
                            className="relative flex-shrink-0"
                            onMouseEnter={() => setHoveredIndex(app.originalIndex)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            {/* Small Bubble */}
                            <div 
                              className={`
                                w-16 h-16 rounded-full border flex items-center justify-center
                                transition-all duration-200 cursor-pointer
                                ${hoveredIndex === app.originalIndex 
                                  ? 'scale-110 shadow-lg border-2' 
                                  : 'scale-100 shadow-sm'
                                }
                              `}
                              style={{ 
                                borderColor: app.color,
                                backgroundColor: hoveredIndex === app.originalIndex ? app.color : 'white'
                              }}
                            >
                              <div className="text-center px-1">
                                <h4 
                                  className={`text-[7px] font-medium leading-tight transition-colors duration-200 ${
                                    hoveredIndex === app.originalIndex ? 'text-white' : 'text-black'
                                  }`}
                                >
                                  {app.name}
                                </h4>
                              </div>
                            </div>

                            {/* Hover Popup - Fixed center position to prevent cutoff */}
                            {hoveredIndex === app.originalIndex && (
                              <div 
                                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-80 max-w-[85vw] max-h-[60vh] overflow-y-auto animate-in fade-in duration-150 pointer-events-none"
                              >
                                <div className="bg-white border border-black/20 shadow-xl rounded p-4">
                                  <div 
                                    className="w-2.5 h-2.5 rounded-full mb-2"
                                    style={{ backgroundColor: app.color }}
                                  />
                                  <h5 className="text-xs font-medium mb-2 text-black">
                                    {app.name}
                                  </h5>
                                  <p className="text-[11px] font-light text-black/70 leading-relaxed">
                                    {app.description}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-2">
          <p className="text-xs font-light text-black/40 tracking-wide">
            ← Scroll to explore →
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIUsageTypes;
