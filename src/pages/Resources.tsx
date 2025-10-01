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
            <p className="text-xl font-light text-black/60 max-w-3xl leading-relaxed">
              I've spent years learning about AI in healthcare and finance. Here's everything I wish 
              I knew when I started—organized into deep dives you can explore at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.href}
                className="group block border border-black/10 p-8 hover:border-black/30 transition-all duration-300 geometric-hover"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 border border-black/10 flex items-center justify-center mb-6 group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <div className="w-8 h-8 border-2 border-black/30 group-hover:border-white transition-all duration-300"></div>
                  </div>
                  
                  <h2 className="text-2xl font-light mb-4 group-hover:text-black/70 transition-colors duration-300">
                    {resource.title}
                  </h2>
                  
                  <p className="text-base font-light text-black/60 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {resource.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="px-3 py-1 text-xs font-light border border-black/10 tracking-wide"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm font-light text-black/40 group-hover:text-black transition-colors duration-300">
                  <span className="mr-2">Explore</span>
                  <span>→</span>
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
