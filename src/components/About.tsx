
const About = () => {
  const timeline = [
    {
      title: "Biomedical Engineering",
      subtitle: "Where it all started",
      year: "2018",
      story: "Built my first medical device prototype"
    },
    {
      title: "The Big Decision",
      subtitle: "Medical school or AI?",
      year: "2020",
      story: "Chose code over a stethoscope"
    },
    {
      title: "Stanford AI Research",
      subtitle: "The deep dive",
      year: "2021",
      story: "Learned AI could scale my impact"
    },
    {
      title: "Apple & NVIDIA",
      subtitle: "Building at scale",
      year: "2023",
      story: "Shipping AI systems to millions"
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
              <p className="text-sm font-light text-black/60 mb-3">
                {item.subtitle}
              </p>
              <p className="text-xs font-light text-black/40 italic">
                {item.story}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 max-w-3xl">
          <p className="text-xl font-light leading-relaxed text-black/70 mb-8">
            My path hasn't been typical. I started in biomedical engineering, got into medical school, 
            and then... didn't go. Instead, I chose Stanford's AI program. My family thought I was crazy.
          </p>
          <p className="text-xl font-light leading-relaxed text-black/70 mb-8">
            But here's what I realized: one doctor can help hundreds of patients in their lifetime. 
            One AI system can help millions. That's not replacing human care—it's amplifying it.
          </p>
          <p className="text-xl font-light leading-relaxed text-black/70">
            Today, I get to work on the problems I care most about. At NVIDIA and Apple, I've built 
            systems that are being used in hospitals and trading floors. But what drives me isn't the 
            technology—it's the impact. Every line of code is a chance to help someone, somewhere, 
            make a better decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
