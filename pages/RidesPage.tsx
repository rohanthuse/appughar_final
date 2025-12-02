import React, { useState } from 'react';
import { RIDES } from '../constants';
import RideCard from '../components/RideCard';
import { Zap, Heart, Baby, Star } from 'lucide-react';

const RidesPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'THRILL' | 'FAMILY' | 'KIDS'>('ALL');

  const filteredRides = filter === 'ALL' 
    ? RIDES 
    : RIDES.filter(ride => ride.category === filter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-appu-pink/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-appu-blue/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20">
            <Star size={16} className="text-appu-yellow" fill="currentColor" />
            <span>25+ World Class Attractions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">World of Adventure</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            From heart-pounding roller coasters to gentle merry-go-rounds, discover rides that make you scream, laugh, and cheer!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        
        {/* Filter Bar */}
        <div className="bg-white rounded-full shadow-xl p-2 max-w-2xl mx-auto mb-12 flex flex-wrap justify-center gap-2">
           {[
             { id: 'ALL', label: 'All Rides', icon: Star },
             { id: 'THRILL', label: 'Thrill', icon: Zap },
             { id: 'FAMILY', label: 'Family', icon: Heart },
             { id: 'KIDS', label: 'Kids', icon: Baby },
           ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  filter === item.id 
                  ? 'bg-gray-900 text-white shadow-lg' 
                  : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon size={18} className={filter === item.id ? 'text-appu-yellow' : ''} />
                {item.label}
              </button>
           ))}
        </div>

        {/* Rides Grid */}
        {filteredRides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRides.map(ride => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-50">
             <p className="text-2xl font-display font-bold">No rides found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default RidesPage;