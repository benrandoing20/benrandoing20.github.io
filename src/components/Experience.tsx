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
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-px bg-black/20"></div>
        </div>
        
        <div className="space-y-3">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                className="group border-b border-black/5 last:border-b-0 transition-all duration-200"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left py-4 hover:bg-black/[0.02] transition-colors px-4 -mx-4 rounded"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 mb-1">
                        <h3 className="text-lg font-light truncate">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-light text-black/40 flex-shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-base font-light text-black/60">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-black/40 transition-transform duration-200 pt-1">
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isExpanded ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-base font-light text-black/60 leading-relaxed px-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
