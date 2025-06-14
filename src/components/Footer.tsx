
const Footer = () => {
  return (
    <footer className="py-16 px-8 border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-sm font-light text-black/40 mb-2">
              © 2024 Portfolio
            </div>
            <div className="text-xs font-light text-black/30">
              Building the future of healthcare AI
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
