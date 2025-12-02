import React from 'react';
import { Ride } from '../types';
import { Zap, Heart, Baby, Ruler } from 'lucide-react';

interface RideCardProps {
  ride: Ride;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const getIcon = () => {
    switch (ride.category) {
      case 'THRILL': return <Zap size={16} />;
      case 'KIDS': return <Baby size={16} />;
      default: return <Heart size={16} />;
    }
  };

  const getColor = () => {
    switch (ride.category) {
      case 'THRILL': return 'bg-pink-100 text-appu-pink';
      case 'KIDS': return 'bg-green-100 text-appu-green';
      default: return 'bg-purple-100 text-appu-purple';
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={ride.image} 
          alt={ride.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
            <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${getColor()}`}>
            {getIcon()}
            {ride.category}
            </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-display">{ride.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {ride.description}
        </p>
        
        {ride.minHeight && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl text-xs font-bold text-gray-600 border border-gray-100">
                <div className="bg-white p-1 rounded-md shadow-sm">
                    <Ruler size={14} className="text-appu-blue" />
                </div>
                <span>Min Height: <span className="text-gray-900">{ride.minHeight}</span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideCard;