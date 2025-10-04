
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the main page (home) or separate pages
  const isHomePage = location.pathname === '/';
  const isResourcesPage = location.pathname.startsWith('/resources');
  const isBucketListPage = location.pathname.startsWith('/bucket-list');
  const isOnSeparatePage = isResourcesPage || isBucketListPage;

  const sectionNavItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Thoughts', href: '#thoughts' },
    { name: 'Contact', href: '#contact' },
  ];

  const pageNavItems = [
    { name: 'Resources', href: '/resources', isActive: isResourcesPage },
    { name: 'Bucket List', href: '/bucket-list', isActive: isBucketListPage },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isOnSeparatePage ? 'bg-white/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="font-light text-lg tracking-tight hover:opacity-70 transition-opacity duration-300"
          >
            Ben Randoing
          </Link>
          
          <div className="flex items-center gap-8">
            {/* Section Navigation - Only show on home page */}
            {isHomePage && (
              <>
                {sectionNavItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-light tracking-wide text-black/70 hover:text-black transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Visual separator before pages */}
                <div className="h-6 w-px bg-black/20"></div>
              </>
            )}

            {/* "Back to Main" button when on separate pages */}
            {isOnSeparatePage && (
              <>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-sm font-light tracking-wide text-black/70 hover:text-black transition-colors duration-300 px-3 py-1.5 border border-black/20 hover:border-black/40 rounded"
                >
                  <span>←</span>
                  <span>Main Page</span>
                </Link>
                
                {/* Visual separator */}
                <div className="h-6 w-px bg-black/20"></div>
              </>
            )}

            {/* Page Navigation - Always visible with clear styling */}
            {pageNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.isActive ? '/' : item.href}
                className={`text-sm tracking-wide transition-all duration-300 px-3 py-1.5 rounded ${
                  item.isActive
                    ? 'bg-black text-white font-medium'
                    : 'font-light text-black/70 hover:text-black hover:bg-black/5'
                }`}
                title={item.isActive ? 'Click to return to main page' : `Go to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
