import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-200 to-white pt-20">
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-appu-purple/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-appu-yellow/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-appu-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-appu-purple font-bold text-sm mb-6 border border-white">
            <Sparkles size={16} />
            <span>The Mini Disney of Pune</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-gray-900 mb-6">
            Unleash the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-appu-pink via-appu-purple to-appu-blue">
              Magic of Joy
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
            Experience thrilling rides, delicious food, and unforgettable memories at Pune's favorite amusement park.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/tickets" className="px-8 py-4 bg-appu-blue text-white rounded-full font-bold text-lg shadow-lg shadow-appu-blue/30 hover:shadow-xl hover:bg-sky-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Plan Your Visit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/rides" className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-appu-pink hover:text-appu-pink transition-colors flex items-center justify-center">
              View Attractions
            </Link>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
               {/* Main playful image composition */}
               <div className="absolute inset-0 bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 cursor-pointer group">
                  <img 
                    src="https://picsum.photos/id/1040/800/800" 
                    alt="Happy kids at park" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                     <p className="text-white font-bold text-2xl">Making Memories</p>
                  </div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -top-6 -right-6 bg-appu-yellow text-gray-900 w-24 h-24 rounded-full flex items-center justify-center font-black text-center text-sm shadow-xl animate-bounce-slow rotate-12 border-4 border-white">
                 OPEN<br/>EVERY<br/>DAY
               </div>
            </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ArrowRight className="rotate-90" />
      </div>
    </div>
  );
};

export default Hero;