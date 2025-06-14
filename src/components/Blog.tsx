
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Personalized Medicine",
      excerpt: "Exploring how artificial intelligence is revolutionizing personalized treatment plans and precision medicine approaches.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      title: "From Medical School to Silicon Valley: A Personal Journey",
      excerpt: "My unconventional path from preparing for medical school to working on cutting-edge AI research at top tech companies.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
    },
    {
      title: "Ethics in Healthcare AI: Balancing Innovation and Responsibility",
      excerpt: "Discussing the critical ethical considerations when deploying AI systems in healthcare environments.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sf font-medium text-4xl sm:text-5xl mb-6 gradient-text">
            Latest Thoughts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on AI, healthcare, biomedical engineering, and the intersection of technology and medicine
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="font-sf font-semibold text-xl text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-medium group-hover:text-gray-600 transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover-lift"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
