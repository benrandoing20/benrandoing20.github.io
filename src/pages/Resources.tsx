import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Resources = () => {
  const resources = [
    {
      title: "Applied AI Concepts",
      description: "Comprehensive guide to practical AI implementation, from fundamentals to cutting-edge techniques",
      href: "/resources/applied-ai",
      topics: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"]
    },
    {
      title: "Health AI",
      description: "The intersection of artificial intelligence and healthcare—transforming diagnostics, treatment, and patient care",
      href: "/resources/health-ai",
      topics: ["Medical Imaging", "Drug Discovery", "Clinical AI", "Personalized Medicine", "Ethics"]
    },
    {
      title: "Hedge Fund AI",
      description: "AI-driven strategies for quantitative finance, algorithmic trading, and market intelligence",
      href: "/resources/hedge-fund-ai",
      topics: ["Algorithmic Trading", "Risk Management", "Market Prediction", "Portfolio Optimization", "Sentiment Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Resources
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl">
              Curated knowledge across applied AI, healthcare innovation, and financial technology.
            </p>
          </div>

          <div className="space-y-12">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.href}
                className="block group border-b border-black/5 pb-12 last:border-b-0 geometric-hover"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-8">
                    <h2 className="text-3xl font-light mb-4 group-hover:text-black/70 transition-colors duration-300">
                      {resource.title}
                    </h2>
                    <p className="text-lg font-light text-black/60 mb-6">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="px-3 py-1 text-xs font-light border border-black/10 tracking-wide"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <div className="w-4 h-px bg-black/40 group-hover:bg-white transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
