const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 geometric-bg">
      <div className="max-w-4xl text-center">
        {/* Profile Photo */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-black/10 group-hover:border-black/30 transition-all duration-300">
              <img
                src="/resources/images/personal/profile.svg"
                alt="Ben Randoing"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight text-balance">
            Hi, I'm Ben Randoing
          </h1>

          <p className="text-xl md:text-2xl font-light text-black/60 max-w-2xl mx-auto text-balance leading-relaxed">
            Curious about what I do? Let's dive in.
            <br className="hidden md:block" />
            <span className="block mt-4 text-black/50">
              Currently at NVIDIA, I bring a breadth of technical experience
            </span>
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
