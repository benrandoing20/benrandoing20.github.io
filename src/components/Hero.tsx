
import { ArrowDown, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="font-sf font-light text-5xl sm:text-6xl lg:text-7xl mb-6 gradient-text leading-tight">
            Biomedical Engineer
            <br />
            <span className="font-medium">turned AI Researcher</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From medical school acceptance to Stanford AI research, 
            now shaping the future of artificial intelligence at 
            <span className="font-medium text-gray-900"> Apple</span> and 
            <span className="font-medium text-gray-900"> NVIDIA</span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover-lift"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover-lift"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#blog"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover-lift"
            aria-label="Blog"
          >
            <ExternalLink size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover-lift"
          >
            Learn More About Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover-lift"
          >
            View My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
