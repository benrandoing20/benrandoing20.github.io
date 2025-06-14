
const Projects = () => {
  const projects = [
    {
      title: "AI Medical Diagnostics",
      category: "Healthcare AI",
      year: "2024",
      description: "Deep learning system for cardiovascular disease detection achieving 94% clinical accuracy."
    },
    {
      title: "Neural Interface Platform",
      category: "Biomedical Engineering",
      year: "2023",
      description: "Real-time brain-computer interface enabling device control through neural signals."
    },
    {
      title: "Federated Learning Framework",
      category: "Privacy AI",
      year: "2023",
      description: "Privacy-preserving distributed learning system for collaborative healthcare research."
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 bg-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Selected Work
          </h2>
          <div className="w-16 h-px bg-black/20"></div>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-b border-black/5 pb-16 last:border-b-0 geometric-hover cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="text-xs font-light text-black/40 mb-2 tracking-wider uppercase">
                    {project.category} • {project.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-black/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="w-8 h-8 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <div className="w-3 h-px bg-black/40 group-hover:bg-white transition-all duration-300"></div>
                </div>
              </div>
              <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
