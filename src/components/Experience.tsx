import { useState } from 'react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "NVIDIA",
      role: "Software Engineer, AI Applications",
      period: "2024 – Present",
      description: "Building real-time conversational AI and agentic systems."
    },
    {
      company: "Apple",
      role: "R&D Graduate Intern, Health Technologies",
      period: "2024",
      description: "Conducted early-stage vision research on health technologies."
    },
    {
      company: "NVIDIA",
      role: "AI/ML Intern",
      period: "2024",
      description: "Built RAG and conversational AI systems for digital humans."
    },
    {
      company: "Stanford NMBL",
      role: "Research Apprentice",
      period: "2023",
      description: "Created EMG-driven algorithms for wearable devices reducing knee joint load."
    },
    {
      company: "Stanford AIMI",
      role: "Computer Vision Engineer",
      period: "2022",
      description: "Improved fairness of skin lesion classifiers with neural style transfer."
    },
    {
      company: "Humacyte",
      role: "R&D Research Associate",
      period: "2022",
      description: "Analyzed vascular graft mechanics for durability validation."
    },
    {
      company: "Big Ideas Lab, Duke",
      role: "Wearable Product Designer",
      period: "2021–2022",
      description: "Designed hardware and firmware for wearable sensors."
    },
    {
      company: "Scottish Rite for Children",
      role: "Biomechanics Research Associate",
      period: "2020–2021",
      description: "Analyzed pediatric gait using motion capture and EMG."
    },
    {
      company: "Arya Lab, Duke",
      role: "Research Intern",
      period: "2020",
      description: "Modeled DNA origami thermodynamics to design reconfigurable nanostructures."
    },
    {
      company: "Ferraris Lab, UT Dallas",
      role: "Research Intern",
      period: "2016",
      description: "Fabricated carbon nanotube electrodes for energy storage applications."
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-px bg-black/20"></div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-6 min-w-max">
              {experiences.map((exp, index) => {
                const isExpanded = expandedIndex === index;
                
                return (
                  <div
                    key={index}
                    className="w-80 flex-shrink-0 border border-black/10 p-6 hover:border-black/30 transition-all duration-300 bg-white"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-xs font-light text-black/40 tracking-wider uppercase">
                        {exp.period}
                      </div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-black/40 hover:text-black/70 transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-light mb-2 leading-snug">
                      {exp.role}
                    </h3>
                    <div className="text-base font-light text-black/60 mb-4">
                      {exp.company}
                    </div>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm font-light text-black/60 leading-relaxed pt-2 border-t border-black/5">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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

export default Experience;
