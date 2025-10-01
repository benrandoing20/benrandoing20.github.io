
const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Let's Talk
          </h2>
          <div className="w-16 h-px bg-black/20 mb-6"></div>
          <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
            I love meeting people working on interesting problems. Whether you're building something 
            in AI, healthcare, or finance—or just want to chat about ideas—reach out anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <p className="text-xl font-light text-black/60 mb-12 leading-relaxed">
              Currently based in the Bay Area, but always happy to connect virtually. 
              Drop me a line—I typically respond within a day or two.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="text-sm font-light text-black/40 mb-1 tracking-wider uppercase">
                  Email
                </div>
                <a href="mailto:hello@portfolio.com" className="text-lg font-light hover:text-black/70 transition-colors duration-300">
                  hello@portfolio.com
                </a>
              </div>
              
              <div>
                <div className="text-sm font-light text-black/40 mb-1 tracking-wider uppercase">
                  Location
                </div>
                <div className="text-lg font-light text-black/70">
                  San Francisco Bay Area
                </div>
              </div>
              
              <div className="pt-8">
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
          </div>
          
          <div className="pt-8">
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none resize-none transition-colors duration-300"
                />
              </div>
              
              <button
                type="submit"
                className="inline-block px-8 py-3 text-sm font-light tracking-wide border border-black/20 hover:bg-black hover:text-white transition-all duration-300 geometric-hover"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
