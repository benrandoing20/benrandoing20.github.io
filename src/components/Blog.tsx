
const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Personalized Medicine",
      date: "March 2024",
      readTime: "8 min"
    },
    {
      title: "From Medical School to Silicon Valley",
      date: "February 2024",
      readTime: "12 min"
    },
    {
      title: "Ethics in Healthcare AI",
      date: "January 2024",
      readTime: "10 min"
    }
  ];

  return (
    <section id="thoughts" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Thoughts
          </h2>
          <div className="w-16 h-px bg-black/20 mb-6"></div>
          <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
            Here's what I've been thinking about lately—ideas from building AI systems, 
            lessons learned, and questions I'm still figuring out.
          </p>
        </div>
        
        <div className="space-y-12">
          {posts.map((post, index) => (
            <a
              key={index}
              href="#"
              className="group block border-b border-black/5 pb-8 last:border-b-0 geometric-hover"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-light mb-2 group-hover:text-black/70 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="text-sm font-light text-black/40 tracking-wide">
                    {post.date} • {post.readTime}
                  </div>
                </div>
                <div className="w-6 h-6 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <div className="w-2 h-px bg-black/40 group-hover:bg-white transition-all duration-300"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
