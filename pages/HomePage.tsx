import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ParkInfo from '../components/ParkInfo';
import RideCard from '../components/RideCard';
import SpecialEvents from '../components/SpecialEvents';
import { RIDES } from '../constants';

const HomePage: React.FC = () => {
  const featuredRides = RIDES.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Featured Rides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <span className="text-appu-pink font-bold uppercase tracking-wider text-sm mb-2 block">Thrill & Fun</span>
               <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900">
                 Fan Favorites
               </h2>
            </div>
            <Link to="/rides" className="group flex items-center gap-2 font-bold text-appu-blue text-lg hover:text-blue-600 transition-colors">
               View All Attractions 
               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRides.map(ride => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        </div>
      </section>

      {/* New Special Events Section */}
      <SpecialEvents />

      <ParkInfo />
    </>
  );
};

export default HomePage;