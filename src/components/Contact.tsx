
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      // EmailJS configuration - get these from https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'benrandoing20@gmail.com', // Your email
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-gray-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Let's Talk
          </h2>
          <div className="w-16 h-px bg-black/20 mb-6"></div>
          <p className="text-lg font-light text-black/60 max-w-2xl leading-relaxed">
            Some of my best opportunities started with a cold message people gave me a shot. Always open to a quick 10 15 minute chat if you want to connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <p className="text-xl font-light text-black/60 mb-12 leading-relaxed">
              Drop me a line.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="text-sm font-light text-black/40 mb-1 tracking-wider uppercase">
                  Email
                </div>
                <a href="mailto:benrandoing20@gmail.com" className="text-lg font-light hover:text-black/70 transition-colors duration-300">
                  benrandoing20@gmail.com
                </a>
              </div>
              
              <div>
                <div className="text-sm font-light text-black/40 mb-1 tracking-wider uppercase">
                  Location
                </div>
                <div className="text-lg font-light text-black/70">
                  San Francisco Bay Area
                </div>
              </div>
              
              <div className="pt-8">
                <div className="flex space-x-8">
                  <a href="#" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
                    Twitter
                  </a>
                  <a href="https://www.linkedin.com/in/benjamin-randoing/" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="https://github.com/benrandoing20" className="text-sm font-light text-black/60 hover:text-black transition-colors duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-black/20 pb-3 text-lg font-light placeholder:text-black/40 focus:border-black focus:outline-none resize-none transition-colors duration-300"
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm font-light">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm font-light">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-block px-8 py-3 text-sm font-light tracking-wide border border-black/20 hover:bg-black hover:text-white transition-all duration-300 geometric-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
