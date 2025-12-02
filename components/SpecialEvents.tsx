
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, PartyPopper, Sparkles } from 'lucide-react';

const EVENTS = [
  {
    title: 'School Picnic',
    description: 'Educational fun & thrilling adventures for students.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800',
    icon: GraduationCap,
    link: '/contact',
    color: 'bg-yellow-400'
  },
  {
    title: 'Family & Friends',
    description: 'Special group packages for unforgettable reunions.',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800',
    icon: Users,
    link: '/tickets',
    color: 'bg-pink-500'
  },
  {
    title: 'Corporate Outing',
    description: 'Team building with a twist of adrenaline.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800',
    icon: Briefcase,
    link: '/contact',
    color: 'bg-blue-500'
  },
  {
    title: 'Events',
    description: 'Concerts, weddings, and grand celebrations.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800',
    icon: PartyPopper,
    link: '/contact',
    color: 'bg-purple-500'
  }
];

const SpecialEvents: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900"></div>
      
      {/* Confetti / Particle Effect */}
      <div className="absolute inset-0 opacity-20 animate-pulse" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
      }}></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-yellow-300 font-bold text-sm mb-6 shadow-lg">
             <Sparkles size={16} />
             <span>A Memorable Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 drop-shadow-lg">
            Celebrate at <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Appu Ghar</span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
            Whether it's a school field trip, a corporate retreat, or a family reunion, we turn every gathering into a magical festival of joy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {EVENTS.map((event, idx) => (
            <Link 
                to={event.link} 
                key={idx} 
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Floating Icon */}
                <div className={`w-14 h-14 ${event.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out`}>
                    <event.icon size={24} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-display tracking-wide">{event.title}</h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-gray-200 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {event.description}
                    </p>
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-2 ${event.color}`}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;
