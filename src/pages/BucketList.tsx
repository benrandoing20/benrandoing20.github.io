import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BucketList = () => {
  const bucketItems = [
    // ACHIEVEMENTS DONE
    { done: true, item: "Earn admission to a top university (Duke, Stanford)" },
    { done: true, item: "Perform with the Dallas Symphony Orchestra (2018)" },
    { done: true, item: "Make Texas All-State Percussion (2016, 2018)" },
    { done: true, item: "Work at Apple Health Tech (2024)" },
    { done: true, item: "Get into medical school (UTSW, Texas A&M, Baylor, USF)" },
    { done: true, item: "Work at NVIDIA in AI" },
    { done: true, item: "Learn to snowboard (Palisades Tahoe)" },
    { done: true, item: "Try surfing (Costa Rica)" },
    { done: true, item: "Go skydiving (Hvar, Croatia)" },
    { done: true, item: "Go bungee jumping (Costa Rica)" },
    { done: true, item: "Travel solo (Morocco, Croatia, Italy, Iceland, Costa Rica)" },
    { done: true, item: "Visit Iceland and swim in geothermal pools" },
    { done: true, item: "See the Northern Lights" },
    { done: true, item: "Ride a motorcycle" },
    { done: true, item: "Take a helicopter ride (Kauai, Hawaii)" },
    { done: true, item: "Live one year with zero alcohol" },
    { done: true, item: "Give a best man speech that people never forget" },
  
    // ADVENTURE + TRAVEL
    { done: false, item: "Travel to all seven continents" },
    { done: false, item: "Swim with whale sharks in the wild" },
    { done: false, item: "See orangutans in Borneo" },
    { done: false, item: "Swim with great white sharks (cage diving)" },
    { done: false, item: "Go wing walking on a biplane" },
    { done: false, item: "Camp in the Sahara under the stars" },
    { done: false, item: "Visit Patagonia and hike Torres del Paine" },
    { done: false, item: "Walk among penguins in Antarctica" },
    { done: false, item: "Climb Mount Kilimanjaro" },
    { done: false, item: "Stand at the edge of Victoria Falls" },
    { done: false, item: "Stand on the Great Wall of China" },
    { done: false, item: "Visit the Taj Mahal at sunrise" },
    { done: false, item: "Go on an African safari" },
    { done: false, item: "Drive cross country (NC → CA)" },
    { done: false, item: "Watch a FIFA World Cup match live" },
    { done: false, item: "Attend a Monaco F1 Grand Prix" },
    { done: false, item: "Live in Europe for a season" },
  
    // PHYSICAL GOALS
    { done: false, item: "Complete an Ironman triathlon" },
    { done: false, item: "Run a marathon" },
    { done: false, item: "Dunk a basketball" },
    { done: false, item: "Reach 10% body fat and peak physical shape" },
    { done: false, item: "Learn to box" },
    { done: false, item: "Build a private gym at home" },
  
    // PERSONAL DEVELOPMENT
    { done: false, item: "Become fluent in French" },
    { done: false, item: "Live with no fear of judgment" },
    // { done: false, item: "Become emotionally unbreakable" },
    // { done: false, item: "Forgive myself fully" },
    { done: false, item: "Write letters to friends after decades and send them" },
  
    // FAMILY & RELATIONSHIPS
    { done: false, item: "Build a great family built on love and loyalty" },
    { done: false, item: "Become a world-class father" },
    { done: false, item: "Give my parents a once-in-a-lifetime thank you trip" },
    { done: false, item: "Host annual reunions with lifelong friends" },
  
    // WEALTH & FREEDOM
    { done: false, item: "Become financially free" },
    { done: false, item: "Own meaningful assets that cash flow while I sleep" },
    { done: false, item: "Own land somewhere peaceful" },

    // MENTAL TOUGHNESS & DISCIPLINE
    // { done: false, item: "Develop a disciplined morning routine I live by" },

    // CAREER & CRAFT MASTERY
    // { done: false, item: "Become world-class at building AI systems end to end" },
    // { done: false, item: "Publish meaningful research that gets cited" },
    // { done: false, item: "Speak at Stanford or MIT as a guest lecturer" },
    // { done: false, item: "Lead a team that ships something used globally" },

    // BUSINESS & WEALTH CREATION
    // { done: false, item: "Generate $1M in a single year" },
    // { done: false, item: "Become financially independent by 35" },
    // { done: false, item: "Build a system of leverage that makes me free" },

    // CREATION & EXPRESSION
    // { done: false, item: "Create a documentary about building a meaningful life" },
    // { done: false, item: "Design and launch a physical product I love" },

    // RELATIONSHIPS & BROTHERHOOD
    // { done: false, item: "Build a tribe of lifelong friends who push each other" },
    { done: false, item: "Be a mentor to someone who needs guidance" },

    // INNER WORK & GROWTH
    // { done: false, item: "Write my personal philosophy and live by it" },

    // LEGACY & IMPACT
    // { done: false, item: "Start a foundation for people with potential, not privilege" },
    // { done: false, item: "Impact millions of lives through technology" },
    // { done: false, item: "Help 100 people transform their lives" },

    // LIFE EXPERIENCES & AESTHETICS
    // { done: false, item: "Live by the ocean with floor-to-ceiling windows" },
    // { done: false, item: "Own a cabin retreat surrounded by nature" },
    // { done: false, item: "Spend a month writing in a beautiful quiet place" },

    // COURAGE & FEAR CHALLENGES
    // { done: false, item: "Enter an amateur boxing match" },
    // { done: false, item: "Share my real story publicly" },
    // { done: false, item: "Do something that scares me every month for a year" },

  
    // CREATION & IMPACT
    { done: false, item: "Create a timeless brand" },
    { done: false, item: "Build a personal website and knowledge library" },
    { done: false, item: "Speak publicly about building meaningful things" },
    { done: false, item: "Start a family foundation for a cause that matters" },
    { done: false, item: "Host meaningful dinner conversations" },
    { done: false, item: "Write a book to inspire others" },
    { done: false, item: "Stand on stage and move an audience emotionally" },
    { done: false, item: "Build tools that reduce human suffering" },
    { done: false, item: "Be proud of the man I became" },
    { done: false, item: "Die with no potential left inside me" }
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
              A living list of things I will do in my life. Some already done. Many ahead.
            </p>
          </div>

          <div className="space-y-6">
            {bucketItems.map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className={`w-6 h-6 border flex items-center justify-center mr-4 mt-1 
                  ${item.done ? "bg-black border-black" : "border-black/20"}
                `}>
                  {item.done && <span className="text-white text-xs">✔</span>}
                </div>
                <span className={`text-lg font-light ${item.done ? "text-black/40 line-through" : "text-black/80"}`}>
                  {index + 1}. {item.item}
                </span>
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
