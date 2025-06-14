
import { Building, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "NVIDIA",
      role: "AI Research Engineer",
      period: "2023 - Present",
      description: "Leading development of next-generation AI models for healthcare applications, focusing on computer vision and natural language processing for medical diagnostics.",
      achievements: [
        "Developed ML models improving diagnostic accuracy by 25%",
        "Published 3 research papers in top-tier conferences",
        "Led cross-functional team of 8 engineers"
      ],
      logo: "🟢"
    },
    {
      company: "Apple",
      role: "Machine Learning Engineer",
      period: "2022 - 2023",
      description: "Worked on AI-powered health features for iOS, integrating biomedical knowledge with consumer technology to make health monitoring more accessible.",
      achievements: [
        "Shipped health features used by millions of users",
        "Optimized ML models for on-device inference",
        "Collaborated with medical professionals on feature validation"
      ],
      logo: "🍎"
    },
    {
      company: "Stanford University",
      role: "AI Research Assistant",
      period: "2020 - 2022",
      description: "Conducted research in AI for healthcare under renowned faculty, focusing on the intersection of biomedical engineering and artificial intelligence.",
      achievements: [
        "Published research in Nature AI",
        "Developed novel algorithms for medical image analysis",
        "Presented at 5 international conferences"
      ],
      logo: "🎓"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sf font-medium text-4xl sm:text-5xl mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            From research labs to industry leadership, building the future of AI in healthcare
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors duration-200">
                    {exp.logo}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="font-sf font-semibold text-2xl text-gray-900 mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 font-medium">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
