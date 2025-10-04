
const About = () => {
  const timeline = [
    {
      title: "Early Years",
      subtitle: "Percussion Nerd",
      year: "High School",
      story: "Studied at Tanglewood and Juilliard"
    },
    {
      title: "Duke",
      subtitle: "BME & Music",
      year: "2018–2022",
      story: "Hard work and Duke basketball"
    },
    {
      title: "The Decision",
      subtitle: "Med School or AI?",
      year: "2022",
      story: "A time of deep reflection"
    },
    {
      title: "Stanford",
      subtitle: "AI & Biomechanics",
      year: "2022–2024",
      story: "CS & Neuromuscular biomechanics research"
    },
    {
      title: "Industry",
      subtitle: " Health & Startups",
      year: "2023–2024",
      story: "Research and moonshot projects"
    },
    {
      title: "NVIDIA",
      subtitle: "AI Applications",
      year: "2024–Present",
      story: "Digital humans, agents, healthcare"
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
        
        <div className="grid md:grid-cols-6 gap-8 lg:gap-12">
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
        
        <div className="mt-32 space-y-8">
          <p className="text-xl font-light leading-relaxed text-black/70">
            I have been fortunate in my opportunities. I studied biomedical engineering, earned a place in medical school, 
            and chose to study AI at Stanford. What guides me is not comfort but the urgency to learn, to do meaningful work, and to win.
          </p>
          <p className="text-xl font-light leading-relaxed text-black/70">
            At NVIDIA and Apple I have worked on AI systems, agents, and voice technologies. I have also spent time volunteering in hospitals 
            and mentoring others. I am driven by a desire to succeed, to push boundaries, and to help others do the same. What matters to me is not the resume line but the growth, the service, and the clarity of purpose.
          </p>
          <p className="text-xl font-light leading-relaxed text-black/70">
            I value honesty and depth. I want to work with people who push each other to think harder, care more, and strive for excellence together. 
            The hardest problems are not technical, they are human, and that is where I want to keep growing, both to achieve and to help others achieve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
