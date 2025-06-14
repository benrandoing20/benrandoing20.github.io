
import { Stethoscope, Brain, Code, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      icon: Stethoscope,
      title: "Biomedical Engineering",
      subtitle: "Foundation in Healthcare",
      description: "Started with a passion for improving human health through engineering solutions and medical innovation."
    },
    {
      icon: Award,
      title: "Medical School Acceptance",
      subtitle: "Traditional Path",
      description: "Accepted to medical school, ready to pursue the conventional route to healthcare impact."
    },
    {
      icon: Brain,
      title: "Stanford AI Pivot",
      subtitle: "The Turning Point",
      description: "Discovered the transformative potential of AI in healthcare and chose to pursue this emerging field at Stanford."
    },
    {
      icon: Code,
      title: "Apple & NVIDIA",
      subtitle: "Industry Impact",
      description: "Now applying AI research to real-world products, shaping the future of technology at leading companies."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sf font-medium text-4xl sm:text-5xl mb-6 gradient-text">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique path from biomedical engineering to cutting-edge AI research, 
            driven by the vision of transforming healthcare through technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                  <item.icon size={28} className="text-gray-700" />
                </div>
              </div>
              <h3 className="font-sf font-semibold text-xl mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="font-medium text-gray-600 mb-3">
                {item.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 max-w-4xl">
            <h3 className="font-sf font-semibold text-2xl mb-4 text-gray-900">
              Current Focus
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about bridging the gap between AI research and practical healthcare applications. 
              My work focuses on developing AI systems that can meaningfully improve patient outcomes while 
              maintaining the highest standards of safety and ethics. Whether it's through advancing machine 
              learning algorithms or creating intuitive user interfaces, I'm committed to making AI accessible 
              and beneficial for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
