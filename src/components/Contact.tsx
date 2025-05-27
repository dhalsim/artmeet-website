
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Be part of a transformative experience where art meets activism. 
            Connect with us to stay updated on tickets, events, and ways to get involved.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Festival Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Location</h4>
                <p>Downtown Cultural District<br />
                123 Arts Avenue<br />
                Cultural Quarter, City Center</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Dates</h4>
                <p>September 15-17, 2024<br />
                Daily Hours: 10:00 AM - 8:00 PM</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Contact</h4>
                <p>info@emergefestival.org<br />
                +1 (555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-purple-900">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-purple-900">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-purple-900">
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message (optional)" 
                  rows={4}
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-orange-400 resize-none"
                ></textarea>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
                Subscribe to Updates
              </Button>
            </form>
          </Card>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="opacity-75">
            © 2024 EMERGE Art Festival. All rights reserved. | Made with passion for social change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
