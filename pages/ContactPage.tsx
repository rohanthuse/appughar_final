import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, PhoneCall } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] pt-28 pb-20 relative overflow-hidden">
      
      {/* Decorative Wave at Top */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100 to-[#F0F9FF] -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 text-6xl opacity-10 animate-bounce-slow">🐘</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-bounce-slow" style={{ animationDelay: '1s' }}>🎢</div>

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-appu-blue font-bold shadow-sm mb-4">
              <MessageSquare size={18} />
              <span>We'd Love to Hear From You</span>
           </div>
           <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-tight">
             Get in Touch with <br/>
             <span className="text-appu-pink relative">
                Appu Ghar
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-appu-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                </svg>
             </span>
           </h1>
           <p className="text-xl text-gray-600">
             Have a question about tickets, group bookings, or lost items? Drop us a message or visit us for a magical day out!
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             
             {/* Info Cards Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-appu-pink text-white p-6 rounded-[2rem] shadow-lg hover:-translate-y-1 transition-transform group">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                       <Phone size={20} />
                    </div>
                    <h3 className="font-bold text-lg mb-1 opacity-90 leading-tight">
                      Call Centre
                      <span className="block text-xs font-normal opacity-80 mt-1">(Time: 9am to 9pm)</span>
                    </h3>
                    <p className="font-black text-xl">9673448855</p>
                 </div>

                 <div className="bg-appu-blue text-white p-6 rounded-[2rem] shadow-lg hover:-translate-y-1 transition-transform group">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                       <Mail size={20} />
                    </div>
                    <h3 className="font-bold text-lg mb-1 opacity-90">Email Us</h3>
                    <p className="font-bold text-lg text-sm sm:text-base break-all">appugharpune@gmail.com</p>
                 </div>
             </div>

             {/* Address Card */}
             <div className="bg-white p-6 rounded-[2rem] shadow-lg border-2 border-appu-green/20">
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h3 className="font-display font-bold text-xl text-gray-800 mb-2">Visit the Park</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                         No.1, Nigdi Pradhikaran, Bhakti Shakti, <br/>
                         Pune, Maharashtra 411044
                      </p>
                   </div>
                </div>
             </div>

             {/* Map Container */}
             <div className="flex-1 bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-xl min-h-[300px] border-4 border-white relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2737872322394!2d73.76632431489467!3d18.65172298733272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b21277a949f5757!2sAppu%20Ghar!5e0!3m2!1sen!2sin!4v1625561028302!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Appu Ghar Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Custom Overlay Button */}
                <a 
                  href="https://goo.gl/maps/xyz" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <MapPin size={16} className="text-red-500" />
                  Open in Maps
                </a>
             </div>

          </div>

          {/* Right Column: Creative Form */}
          <div className="lg:col-span-7">
             <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
                
                {/* Decorative blob in form */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-appu-purple/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 relative z-10">Send a Message</h3>
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-gray-500 ml-4">Your Name</label>
                         <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                              type="text" 
                              placeholder="John Doe"
                              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-12 py-4 font-bold text-gray-700 focus:outline-none focus:border-appu-purple focus:bg-white transition-all"
                            />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-gray-500 ml-4">Phone Number</label>
                         <div className="relative">
                            <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                              type="tel" 
                              placeholder="+91 98..."
                              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-12 py-4 font-bold text-gray-700 focus:outline-none focus:border-appu-purple focus:bg-white transition-all"
                            />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-4">Email Address</label>
                      <div className="relative">
                         <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                         <input 
                           type="email" 
                           placeholder="john@example.com"
                           className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-12 py-4 font-bold text-gray-700 focus:outline-none focus:border-appu-purple focus:bg-white transition-all"
                         />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 ml-4">How can we help?</label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us about your query..."
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 font-bold text-gray-700 focus:outline-none focus:border-appu-purple focus:bg-white transition-all resize-none"
                      ></textarea>
                   </div>

                   <div className="pt-4">
                      <button className="w-full bg-gradient-to-r from-appu-purple to-indigo-600 text-white font-bold text-lg py-5 rounded-2xl shadow-xl shadow-purple-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                         Send Message
                         <Send size={20} />
                      </button>
                   </div>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;