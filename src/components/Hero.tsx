
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 geometric-bg">
      <div className="max-w-4xl text-center">
        <div className="mb-16">
          <div className="w-24 h-24 mx-auto mb-12 bg-black/5 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-black rounded-full"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight text-balance">
            Biomedical Engineer
            <br />
            <span className="text-black/60">AI Researcher</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-black/60 max-w-2xl mx-auto text-balance leading-relaxed">
            From medical school to Stanford AI research. 
            Now at Apple and NVIDIA, shaping the future of artificial intelligence.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a
            href="#about"
            className="inline-block px-8 py-3 text-sm font-light tracking-wide border border-black/20 hover:bg-black hover:text-white transition-all duration-300 geometric-hover"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
