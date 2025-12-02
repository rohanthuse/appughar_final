import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-4 py-3">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-appu-pink rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
            A
          </div>
          <span className="text-2xl font-display font-bold text-gray-800 tracking-tight">
            Appu<span className="text-appu-blue">Ghar</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold text-gray-600">
          <Link to="/about" className="hover:text-appu-pink transition-colors">About Us</Link>
          <Link to="/rides" className="hover:text-appu-blue transition-colors">Rides</Link>
          <Link to="/tickets" className="hover:text-appu-purple transition-colors">Tickets</Link>
          <Link to="/planner" className="hover:text-appu-yellow-dark transition-colors">AI Planner</Link>
          <Link to="/faq" className="hover:text-appu-green transition-colors">FAQ</Link>
          
          <Link 
            to="/contact" 
            className="bg-appu-yellow text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all shadow-md flex items-center gap-2 group"
          >
            <div className="bg-white/20 p-1 rounded-full">
              <Phone size={16} className="text-gray-900 group-hover:rotate-12 transition-transform" />
            </div>
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 md:hidden border border-gray-100 animate-in slide-in-from-top-4 duration-200">
          <Link to="/about" className="text-lg font-bold text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/rides" className="text-lg font-bold text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Rides</Link>
          <Link to="/tickets" className="text-lg font-bold text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Tickets</Link>
          <Link to="/planner" className="text-lg font-bold text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>AI Planner</Link>
          <Link to="/faq" className="text-lg font-bold text-gray-700 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link 
            to="/contact" 
            className="w-full bg-appu-pink text-white font-bold py-3 rounded-xl mt-2 flex justify-center items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;