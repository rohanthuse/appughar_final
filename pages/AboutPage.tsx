import React from 'react';
import { Heart, Shield, Smile, Users, Clock, Trophy, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-appu-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-appu-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-purple-100 rounded-full text-appu-purple font-bold text-sm mb-6 shadow-sm">
             <Sparkles size={16} />
             <span>Since 1984</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-gray-900 mb-6 leading-tight">
            The Story Behind <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-appu-purple via-appu-pink to-appu-blue">
              The Smiles
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            For over three decades, Appu Ghar has been the heartbeat of Pune's entertainment, creating magical memories for generations of families.
          </p>
        </div>
      </section>

      {/* Legacy & Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative group">
                <div className="absolute inset-0 bg-appu-blue rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
                <img 
                  src="https://picsum.photos/id/1047/800/800" 
                  alt="Vintage Park Memory" 
                  className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover border-4 border-white rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500"
                />
             </div>
             <div>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Pune's First <span className="text-appu-pink">Disneyland</span></h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                   <p>
                      Inaugurated in 1984, Appu Ghar was named after the beloved mascot of the 1982 Asian Games, "Appu" the elephant. Located at the foot of the magnificent Durga Tekdi, it quickly became known as the "Mini Disney of Pune".
                   </p>
                   <p>
                      What started as a small park with a few mechanical rides has transformed into a state-of-the-art amusement park known as <strong>Appu Ghar - The Magic World</strong>. We have evolved with time, upgrading our safety standards and introducing world-class thrill rides while keeping the nostalgic charm alive.
                   </p>
                   <p className="font-bold text-appu-purple">
                      Today, we are more than just a park; we are a tradition for Pune's families.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-[#FDF6F6]">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-display font-bold text-gray-900">Our Magic Formula</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Safety */}
               <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-appu-blue hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 bg-blue-50 text-appu-blue rounded-2xl flex items-center justify-center mb-6">
                     <Shield size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Safety First</h3>
                  <p className="text-gray-500">
                     We adhere to strict international safety protocols. Every ride is inspected daily by certified engineers because your safety is our happiness.
                  </p>
               </div>

               {/* Joy */}
               <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-appu-pink hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 bg-pink-50 text-appu-pink rounded-2xl flex items-center justify-center mb-6">
                     <Heart size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Pure Joy</h3>
                  <p className="text-gray-500">
                     We believe in the power of laughter. Our park is designed to bring out the inner child in everyone, from toddlers to grandparents.
                  </p>
               </div>

               {/* Community */}
               <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-appu-green hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 bg-green-50 text-appu-green rounded-2xl flex items-center justify-center mb-6">
                     <Users size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">For Everyone</h3>
                  <p className="text-gray-500">
                     Affordable fun is our promise. We strive to make world-class entertainment accessible to every family in Pune and beyond.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Fun Stats */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
         {/* Background Patterns */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div className="space-y-2">
                  <div className="text-appu-yellow flex justify-center mb-4"><Clock size={40} /></div>
                  <div className="text-4xl md:text-5xl font-black">40+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Years of Fun</div>
               </div>
               <div className="space-y-2">
                  <div className="text-appu-pink flex justify-center mb-4"><Trophy size={40} /></div>
                  <div className="text-4xl md:text-5xl font-black">25+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">World Class Rides</div>
               </div>
               <div className="space-y-2">
                  <div className="text-appu-blue flex justify-center mb-4"><Smile size={40} /></div>
                  <div className="text-4xl md:text-5xl font-black">5M+</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Happy Visitors</div>
               </div>
               <div className="space-y-2">
                  <div className="text-appu-green flex justify-center mb-4"><Heart size={40} /></div>
                  <div className="text-4xl md:text-5xl font-black">100%</div>
                  <div className="text-gray-400 font-bold uppercase tracking-widest text-sm">Safety Record</div>
               </div>
            </div>
         </div>
      </section>

      {/* Meet the Team/Mascot */}
      <section className="py-20 text-center">
         <div className="container mx-auto px-4">
             <div className="inline-block p-6 rounded-full bg-blue-50 mb-8 animate-bounce-slow">
                 <span className="text-6xl">🐘</span>
             </div>
             <h2 className="text-4xl font-display font-bold mb-6">Meet Appu!</h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Appu isn't just a mascot; he's the spirit of the park! Friendly, giant, and always ready for a hug, Appu represents the big-hearted hospitality of Pune.
             </p>
             <button className="bg-appu-purple text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-700 transition-colors">
                Take a Selfie with Appu
             </button>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;