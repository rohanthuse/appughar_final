import React from 'react';
import { Clock, MapPin, Phone, Star, ArrowRight, Utensils, Car, BriefcaseMedical, Lock, Wifi } from 'lucide-react';

const ParkInfo: React.FC = () => {
  return (
    <section id="info" className="py-24 relative overflow-hidden bg-[#FFF9F0]">
      {/* Decorative Wave at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full bg-yellow-100 text-yellow-800 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm">Plan Your Adventure</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900">
            Park Information
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Opening Hours - Large Card */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 shadow-xl border-b-[8px] border-appu-blue hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
             {/* Decorative circle */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full transition-transform group-hover:scale-125 duration-700"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-appu-blue mb-6 shadow-sm">
                   <Clock size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">Opening Hours</h3>
                <p className="text-gray-500 mb-8 font-medium">Open 365 days a year for maximum fun!</p>
                
                <div className="space-y-4">
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="font-bold text-gray-600">Park Opens</span>
                      <span className="font-black text-appu-blue text-lg">11:00 AM</span>
                   </div>
                   <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="font-bold text-gray-600">Park Closes</span>
                      <span className="font-black text-appu-pink text-lg">7:00 PM</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Location - Dark Card */}
          <div className="lg:col-span-4 bg-gray-900 rounded-[2.5rem] p-8 shadow-xl border-b-[8px] border-appu-green hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-white group flex flex-col justify-between">
             {/* Dot Pattern Background */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:16px_16px]"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-appu-green mb-6 border border-white/10 shadow-sm">
                   <MapPin size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display">Getting Here</h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                   No.1, Nigdi Pradhikaran, Bhakti Shakti, Pune, Maharashtra 411044
                </p>
             </div>
             
             <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="relative z-10 mt-8 w-full bg-appu-green text-gray-900 font-bold py-4 rounded-xl hover:bg-green-400 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                Get Directions <ArrowRight size={20} />
             </a>
          </div>

          {/* Right Column - Stats & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
             {/* Contact */}
             <div className="flex-1 bg-appu-pink text-white rounded-[2.5rem] p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <Phone size={32} className="mb-3 relative z-10" />
                <p className="font-bold text-lg opacity-90 relative z-10">Support</p>
                <p className="text-lg font-black relative z-10">+91 98765 43210</p>
             </div>

             {/* Rating */}
             <div className="flex-1 bg-appu-yellow text-gray-900 rounded-[2.5rem] p-6 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-center items-center text-center">
                 <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#1f2937" className="text-gray-900" />)}
                 </div>
                 <p className="font-black text-3xl">4.8 / 5</p>
                 <p className="font-bold text-xs uppercase tracking-wide opacity-70">Google Reviews</p>
             </div>
          </div>

          {/* Amenities Strip */}
          <div className="lg:col-span-12 mt-4">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 flex flex-wrap justify-center lg:justify-between gap-6 md:gap-8">
                {[
                  { icon: Utensils, label: "Food Court", color: "text-appu-blue", bg: "bg-blue-50" },
                  { icon: Car, label: "Ample Parking", color: "text-appu-purple", bg: "bg-purple-50" },
                  { icon: BriefcaseMedical, label: "First Aid", color: "text-appu-pink", bg: "bg-pink-50" },
                  { icon: Lock, label: "Lockers", color: "text-appu-green", bg: "bg-green-50" },
                  { icon: Wifi, label: "Free Wifi", color: "text-yellow-600", bg: "bg-yellow-50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-gray-600 group cursor-default">
                    <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} className={item.color} />
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors">{item.label}</span>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParkInfo;