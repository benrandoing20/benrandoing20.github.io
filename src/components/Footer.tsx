
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-sf font-semibold text-2xl mb-4">
            Building the Future of Healthcare AI
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about the intersection of biomedical engineering and artificial intelligence, 
            creating solutions that improve human health and wellbeing.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@portfolio.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> for the future of healthcare
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
