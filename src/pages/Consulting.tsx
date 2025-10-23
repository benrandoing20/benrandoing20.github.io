import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';

const Consulting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: `[WORK TOGETHER INQUIRY]\n\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`,
          to_email: 'benrandoing20@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpAreas = [
    {
      phase: "Discovering AI",
      description: "Identify where AI can actually add value to your operations. Cut through the hype to find practical applications that align with your specific needs and constraints."
    },
    {
      phase: "Strategy & ROI",
      description: "Develop clear roadmap for AI usage with realistic cost analysis and return on investment projections. Prioritize initiatives that deliver measurable business impact."
    },
    {
      phase: "Developing Tools",
      description: "Hands-on guidance building custom AI solutions. From proof-of-concept to production deployment, including architecture decisions and technical implementation."
    },
    {
      phase: "Monitoring & Iteration",
      description: "Establish evaluation frameworks to measure performance. Continuous refinement based on real-world results and evolving requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
          >
            <span className="mr-2">←</span> Back
          </Link>
          
          <div className="mb-32">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight leading-tight">
              Let's Work Together
            </h1>
            <div className="w-24 h-px bg-black/20 mb-12"></div>
            <p className="text-2xl font-light text-black/70 max-w-3xl leading-relaxed mb-8">
              Technical guidance for healthcare, finance, and AI-driven initiatives.
            </p>
            <p className="text-lg font-light text-black/60 max-w-3xl leading-relaxed">
              My approach is simple: deliver real value, learn quickly, and always do excellent work. I work fast, care deeply about impact, and partner with clients to solve their hardest problems.
            </p>
          </div>

          {/* Places I Can Help */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">
              Places I Can Help
            </h2>
            <div className="w-16 h-px bg-black/20 mb-16"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {helpAreas.map((step, index) => (
                <div key={index}>
                  <div className="text-4xl font-extralight text-black/20 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-light mb-3 text-black/90">
                    {step.phase}
                  </h3>
                  <p className="text-sm font-light text-black/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">
              Let's Discuss Your Project
            </h2>
            <div className="w-16 h-px bg-black/20 mb-8"></div>
            <p className="text-lg font-light text-black/60 max-w-3xl mb-16 leading-relaxed">
              Whether you're exploring a new technical initiative, facing implementation challenges, or looking for strategic guidance, I'd be happy to chat. Initial conversations are informal and exploratory.
            </p>
            
            <div className="grid md:grid-cols-2 gap-24">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-light mb-8 text-black/90">
                  Get in Touch
                </h3>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="text-sm font-light text-black/40 mb-2 tracking-wider uppercase">
                      Email
                    </div>
                    <a 
                      href="mailto:benrandoing20@gmail.com?subject=Let's Work Together" 
                      className="text-lg font-light hover:text-black/70 transition-colors duration-300"
                    >
                      benrandoing20@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-sm font-light text-black/40 mb-2 tracking-wider uppercase">
                      Location
                    </div>
                    <div className="text-lg font-light text-black/70">
                      San Francisco Bay Area
                    </div>
                    <div className="text-sm font-light text-black/50 mt-1">
                      Available for remote engagements globally
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-light text-black/40 mb-2 tracking-wider uppercase">
                      Response Time
                    </div>
                    <div className="text-lg font-light text-black/70">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>

                <div>
                  <a 
                    href="https://www.linkedin.com/in/benjamin-randoing/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-light text-black/70 hover:text-black transition-colors duration-300"
                  >
                    <span>Connect on LinkedIn</span>
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-light mb-8 text-black/90">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-base font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-base font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization (optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-base font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or challenge..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-black/20 pb-3 text-base font-light placeholder:text-black/40 focus:border-black focus:outline-none resize-none transition-colors duration-300"
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm font-light p-4 bg-green-50 border border-green-200">
                      Message sent successfully! I'll get back to you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm font-light p-4 bg-red-50 border border-red-200">
                      Failed to send message. Please try emailing me directly at benrandoing20@gmail.com
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block px-8 py-3 text-sm font-light tracking-wide border border-black/20 hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consulting;

