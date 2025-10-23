
import { useParams, Link } from 'react-router-dom';
import { explorations } from '@/data/explorations';
import { ArrowLeft, ExternalLink, Github, FileText, Image, Presentation, BookOpen, Book, FolderGit2, Globe } from 'lucide-react';

const ExplorationDetail = () => {
  const { id } = useParams();
  const exploration = explorations.find(e => e.id === id);

  if (!exploration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Exploration not found</h1>
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
              {exploration.category} • {exploration.year} • {exploration.status}
            </div>
            <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-tight">
              {exploration.title}
            </h1>
            <p className="text-xl font-light text-black/60 mb-8 leading-relaxed">
              {exploration.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {exploration.links?.demo && (
                <a href={exploration.links.demo} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              )}
              {exploration.links?.github && (
                <a href={exploration.links.github} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              )}
              {exploration.links?.paper && (
                <a href={exploration.links.paper} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <FileText className="w-4 h-4 mr-2" />
                  Research Paper
                </a>
              )}
              {exploration.links?.poster && (
                <a href={exploration.links.poster} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Image className="w-4 h-4 mr-2" />
                  Poster
                </a>
              )}
              {exploration.links?.slides && (
                <a href={exploration.links.slides} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Presentation className="w-4 h-4 mr-2" />
                  Slides
                </a>
              )}
              {exploration.links?.blog && (
                <a href={exploration.links.blog} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Blog Post
                </a>
              )}
              {exploration.links?.docs && (
                <a href={exploration.links.docs} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Book className="w-4 h-4 mr-2" />
                  Documentation
                </a>
              )}
              {exploration.links?.repo && (
                <a href={exploration.links.repo} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <FolderGit2 className="w-4 h-4 mr-2" />
                  Repository
                </a>
              )}
              {exploration.links?.website && (
                <a href={exploration.links.website} className="inline-flex items-center px-6 py-2 border border-black/20 hover:bg-black hover:text-white transition-all text-sm font-light">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Role</h3>
              <p className="font-light text-black/80">{exploration.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Duration</h3>
              <p className="font-light text-black/80">{exploration.duration}</p>
            </div>
            {exploration.team && (
              <div>
                <h3 className="text-sm font-light text-black/40 mb-4 tracking-wider uppercase">Team</h3>
                <p className="font-light text-black/80">{exploration.team}</p>
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-extralight mb-6 tracking-tight">Overview</h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                {exploration.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extralight mb-6 tracking-tight">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {exploration.technologies.map((tech, index) => (
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
                {exploration.impact}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorationDetail;

