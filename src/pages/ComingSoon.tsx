import { Link, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  const location = useLocation();
  const state = location.state as { title?: string } | null;
  
  // Use the original title from state, or extract from URL as fallback
  const getPageTitle = () => {
    if (state?.title) {
      return state.title;
    }
    const paths = location.pathname.split('/').filter(Boolean);
    const lastPath = paths[paths.length - 1];
    return lastPath
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Get the parent page path (go back two levels)
  const getBackPath = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    if (paths.length >= 2) {
      return `/${paths.slice(0, 2).join('/')}`;
    }
    return '/resources';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <Link 
              to={getBackPath()} 
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back
            </Link>
            
            <div className="text-center py-20">
              <h1 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">
                {getPageTitle()}
              </h1>
              
              <div className="w-24 h-px bg-black/20 mb-8 mx-auto"></div>
              
              <p className="text-2xl font-light text-black/40 mb-4">
                Coming Soon
              </p>
              
              <p className="text-lg font-light text-black/60 max-w-2xl mx-auto leading-relaxed">
                This resource page is currently under development. Check back soon for comprehensive insights and detailed write-ups on this topic.
              </p>
              
              <div className="mt-16">
                <Link 
                  to="/resources"
                  className="inline-flex items-center text-sm font-light text-black/60 hover:text-black transition-colors duration-300 border border-black/10 px-8 py-4 hover:border-black/30"
                >
                  <span className="mr-2">←</span> Browse All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;

