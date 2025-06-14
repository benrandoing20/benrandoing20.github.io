
const About = () => {
  const timeline = [
    {
      title: "Biomedical Engineering",
      subtitle: "Foundation",
      year: "2018"
    },
    {
      title: "Medical School Acceptance",
      subtitle: "Traditional Path",
      year: "2020"
    },
    {
      title: "Stanford AI Research",
      subtitle: "The Pivot",
      year: "2021"
    },
    {
      title: "Apple & NVIDIA",
      subtitle: "Industry Impact",
      year: "2023"
    }
  ];

  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Journey
          </h2>
          <div className="w-16 h-px bg-black/20"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-16">
          {timeline.map((item, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <div className="text-xs font-light text-black/40 mb-2 tracking-wider uppercase">
                  {item.year}
                </div>
                <div className="w-8 h-8 border border-black/10 flex items-center justify-center mb-4 group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <div className="w-2 h-2 bg-black/20 group-hover:bg-white transition-all duration-300"></div>
                </div>
              </div>
              <h3 className="text-lg font-light mb-2 text-balance">
                {item.title}
              </h3>
              <p className="text-sm font-light text-black/60">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 max-w-3xl">
          <p className="text-xl font-light leading-relaxed text-black/70">
            My work focuses on the intersection of artificial intelligence and healthcare, 
            developing systems that meaningfully improve patient outcomes while maintaining 
            the highest standards of safety and ethics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
