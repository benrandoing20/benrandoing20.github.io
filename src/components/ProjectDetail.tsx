
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, FileText, Image, Presentation, BookOpen, Book, FolderGit2, Globe } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Project not found</h1>
          <Link to="/" className="text-black/60 hover:text-black">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <Link to="/" className="inline-flex items-center text-black/70 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-12">
            <div className="text-xs font-light text-black/40 mb-4 tracking-wider uppercase">
              {project.category} • {project.year} • {project.status}
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl font-light text-black/60 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {project.links?.demo && (
                <a href={project.links.demo} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              )}
              {project.links?.github && (
                <a href={project.links.github} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              )}
              {project.links?.paper && (
                <a href={project.links.paper} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <FileText className="w-4 h-4 mr-2" />
                  Research Paper
                </a>
              )}
              {project.links?.poster && (
                <a href={project.links.poster} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Image className="w-4 h-4 mr-2" />
                  Poster
                </a>
              )}
              {project.links?.slides && (
                <a href={project.links.slides} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Presentation className="w-4 h-4 mr-2" />
                  Slides
                </a>
              )}
              {project.links?.blog && (
                <a href={project.links.blog} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Blog Post
                </a>
              )}
              {project.links?.docs && (
                <a href={project.links.docs} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Book className="w-4 h-4 mr-2" />
                  Documentation
                </a>
              )}
              {project.links?.repo && (
                <a href={project.links.repo} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <FolderGit2 className="w-4 h-4 mr-2" />
                  Repository
                </a>
              )}
              {project.links?.website && (
                <a href={project.links.website} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Role</h3>
              <p className="font-light text-black/80">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Duration</h3>
              <p className="font-light text-black/80">{project.duration}</p>
            </div>
            {project.team && (
              <div>
                <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Team</h3>
                <p className="font-light text-black/80">{project.team}</p>
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-extralight mb-6 tracking-tight">Overview</h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extralight mb-6 tracking-tight">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-black/10 text-sm font-light text-black/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extralight mb-6 tracking-tight">Impact</h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
