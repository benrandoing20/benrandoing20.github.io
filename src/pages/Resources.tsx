import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Resources = () => {
  const resources = [
    {
      title: "Digital Biology",
      description: "Computational approaches to understanding life—from genomics and proteomics to systems biology and bioengineering",
      href: "/resources/digital-biology",
      topics: ["• Genomic sequencing & analysis", "• Protein structure prediction", "• Bioinformatics pipelines", "• Systems biology modeling", "• Synthetic biology design"]
    },
    {
      title: "Digital Devices",
      description: "Hardware and software systems powering the next generation of intelligent devices and IoT ecosystems",
      href: "/resources/digital-devices",
      topics: ["• Edge AI & embedded systems", "• Sensor fusion & data processing", "• Wearable technology", "• Smart device architectures", "• Hardware-software co-design"]
    },
    {
      title: "Digital Health Concepts",
      description: "The intersection of artificial intelligence and healthcare—transforming diagnostics, treatment, and patient care",
      href: "/resources/digital-health",
      topics: ["• Medical imaging & diagnostics", "• Clinical decision support", "• Personalized medicine", "• Remote patient monitoring", "• Healthcare operations AI"]
    },
    {
      title: "Applied AI",
      description: "Comprehensive guide to practical AI implementation, from foundational theory to production deployment",
      href: "/resources/applied-ai",
      topics: ["• Machine learning fundamentals", "• Deep learning architectures", "• Natural language processing", "• Computer vision systems", "• MLOps & deployment"]
    },
    {
      title: "Hedge Fund AI",
      description: "AI-driven strategies for quantitative finance, algorithmic trading, and market intelligence systems",
      href: "/resources/hedge-fund-ai",
      topics: ["• Algorithmic trading strategies", "• Risk management systems", "• Alternative data processing", "• Portfolio optimization", "• Market sentiment analysis"]
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
              Comprehensive resources spanning digital biology, health tech, AI systems, and quantitative finance. 
              Each section contains detailed write-ups and practical insights from years of hands-on experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.href}
                className="group block border border-black/10 p-10 hover:border-black/30 transition-all duration-300 geometric-hover bg-white hover:shadow-lg"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 border border-black/10 flex items-center justify-center mb-8 group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <div className="w-10 h-10 border-2 border-black/30 group-hover:border-white transition-all duration-300"></div>
                  </div>
                  
                  <h2 className="text-3xl font-light mb-6 group-hover:text-black/70 transition-colors duration-300">
                    {resource.title}
                  </h2>
                  
                  <p className="text-lg font-light text-black/60 mb-8 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3">
                    {resource.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="text-sm font-light text-black/70 leading-relaxed"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
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
