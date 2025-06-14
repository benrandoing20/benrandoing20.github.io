
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '@/data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-32 px-8 bg-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Selected Work
          </h2>
          <div className="w-16 h-px bg-black/20 mb-12"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-light tracking-wide border transition-all duration-300 ${
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
        
        <div className="space-y-24">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block border-b border-black/5 pb-16 last:border-b-0 geometric-hover cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-xs font-light text-black/40 tracking-wider uppercase">
                      {project.category} • {project.year}
                    </div>
                    <div className={`px-2 py-1 text-xs font-light tracking-wide ${
                      project.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                      project.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                      'bg-orange-50 text-orange-700 border border-orange-200'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-black/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm font-light text-black/50 mb-2">
                      {project.role} • {project.duration}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <div className="w-3 h-px bg-black/40 group-hover:bg-white transition-all duration-300"></div>
                </div>
              </div>
              
              <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-light text-black/50 border border-black/10 bg-white/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 text-xs font-light text-black/40">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div className="mt-4 text-sm font-light text-black/50">
                {project.impact}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
