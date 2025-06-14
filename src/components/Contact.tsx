
import { Mail, MapPin, Coffee, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sf font-medium text-4xl sm:text-5xl mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600">
            Interested in collaborating on AI healthcare projects or discussing the future of biomedical engineering?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="font-sf font-semibold text-2xl mb-6 text-gray-900">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">hello@portfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">San Francisco Bay Area</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Coffee size={20} className="text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Coffee Chat</h4>
                  <p className="text-gray-600">Always open to interesting conversations</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-sf font-semibold text-lg mb-3 text-gray-900">
                Areas of Interest
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AI in Healthcare & Medical Diagnostics</li>
                <li>• Biomedical Engineering Applications</li>
                <li>• Ethics in AI & Healthcare Technology</li>
                <li>• Startup Collaborations & Consulting</li>
                <li>• Speaking Engagements & Conferences</li>
              </ul>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell me about your project or how we might collaborate..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 hover-lift flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
