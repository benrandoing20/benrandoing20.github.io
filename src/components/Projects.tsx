
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Medical Diagnostics",
      category: "Healthcare AI",
      description: "Deep learning system for early detection of cardiovascular diseases using ECG data, achieving 94% accuracy in clinical trials.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      tech: ["Python", "TensorFlow", "Computer Vision", "Medical Imaging"],
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      }
    },
    {
      title: "Neural Interface Platform",
      category: "Biomedical Engineering",
      description: "Real-time brain-computer interface for assistive technologies, enabling paralyzed patients to control devices through thought.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
      tech: ["Signal Processing", "Machine Learning", "IoT", "Real-time Systems"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Federated Learning Framework",
      category: "Privacy-Preserving AI",
      description: "Distributed machine learning system for healthcare data that maintains patient privacy while enabling collaborative research.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["PyTorch", "Cryptography", "Distributed Systems", "Privacy"],
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Wearable Health Monitor",
      category: "Consumer Health",
      description: "IoT-enabled wearable device with ML-powered anomaly detection for continuous health monitoring and early warning systems.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      tech: ["IoT", "Edge Computing", "Mobile Development", "Data Analytics"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sf font-medium text-4xl sm:text-5xl mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase the intersection of AI, biomedical engineering, 
            and practical healthcare solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-sf font-semibold text-2xl text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Play size={20} />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover-lift"
          >
            View All Projects
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
