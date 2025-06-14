
const Experience = () => {
  const experiences = [
    {
      company: "NVIDIA",
      role: "AI Research Engineer",
      period: "2023 - Present",
      description: "Leading development of next-generation AI models for healthcare applications."
    },
    {
      company: "Apple",
      role: "Machine Learning Engineer",
      period: "2022 - 2023",
      description: "Developed AI-powered health features for iOS used by millions."
    },
    {
      company: "Stanford University",
      role: "AI Research Assistant",
      period: "2020 - 2022",
      description: "Conducted research in AI for healthcare under renowned faculty."
    }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-px bg-black/20"></div>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group border-b border-black/5 pb-12 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-light mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-lg font-light text-black/60 mb-2">
                    {exp.company}
                  </div>
                </div>
                <div className="text-sm font-light text-black/40 tracking-wide">
                  {exp.period}
                </div>
              </div>
              <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
