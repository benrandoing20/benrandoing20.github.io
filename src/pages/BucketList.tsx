import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BucketList = () => {
  const bucketItems = [
    {
      category: "Innovation & Impact",
      items: [
        "Build a billion-dollar AI company",
        "Develop breakthrough healthcare AI that saves 1M+ lives",
        "Launch a venture fund focused on transformative technologies",
        "Publish seminal research that defines a new AI paradigm",
        "Create an AI system that passes the Turing test"
      ]
    },
    {
      category: "Entrepreneurship",
      items: [
        "IPO or successful exit of a company I founded",
        "Mentor 100+ entrepreneurs and researchers",
        "Build a portfolio of 10+ successful investments",
        "Establish a research institute for ethical AI",
        "Speak at TED on the future of intelligence"
      ]
    },
    {
      category: "Personal Growth",
      items: [
        "Master three languages fluently",
        "Complete an Ironman triathlon",
        "Write a bestselling book on AI and society",
        "Learn to pilot a plane",
        "Spend a month in complete solitude for deep reflection"
      ]
    },
    {
      category: "Experiences",
      items: [
        "Visit all seven continents",
        "Live in three different countries",
        "Attend a SpaceX launch in person",
        "Meet and discuss ideas with my top 10 intellectual heroes",
        "Experience zero gravity"
      ]
    },
    {
      category: "Legacy",
      items: [
        "Establish a scholarship fund for underrepresented students in AI",
        "Create a foundation for AI safety research",
        "Build systems that outlast me by decades",
        "Inspire a generation to pursue ambitious technical challenges",
        "Leave the world measurably better than I found it"
      ]
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
              Life Bucket List
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl">
              A living document of ambitions, dreams, and commitments. Updated as I grow.
            </p>
          </div>

          <div className="space-y-24">
            {bucketItems.map((section, index) => (
              <div key={index} className="border-l-2 border-black/5 pl-8">
                <h2 className="text-2xl font-light mb-8 tracking-tight">
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start group"
                    >
                      <div className="w-6 h-6 border border-black/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-black group-hover:border-black transition-all duration-300">
                        <div className="w-2 h-2 bg-black/20 group-hover:bg-white transition-all duration-300"></div>
                      </div>
                      <span className="text-lg font-light text-black/70 group-hover:text-black transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BucketList;
