import React from 'react';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import TicketsPage from './pages/TicketsPage';
import RidesPage from './pages/RidesPage';
import { Phone, Mail, Instagram, Facebook, Twitter, MapPin, Headphones, PhoneCall } from 'lucide-react';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-appu-pink selection:text-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rides" element={<RidesPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white pt-16 pb-8">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                 {/* Brand Column */}
                 <div>
                    <h3 className="text-2xl font-display font-bold mb-6">AppuGhar</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">Making Pune smile since 1984. Come relive your childhood and create new memories at the Mini Disney of Pune.</p>
                    <div className="flex gap-4">
                       <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-appu-blue transition-colors"><Facebook size={18} /></a>
                       <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-appu-pink transition-colors"><Instagram size={18} /></a>
                       <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-appu-blue transition-colors"><Twitter size={18} /></a>
                    </div>
                 </div>
                 
                 {/* Quick Links */}
                 <div>
                    <h4 className="font-bold text-lg mb-6 text-appu-yellow">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400">
                       <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                       <li><Link to="/rides" className="hover:text-white transition-colors">Attractions</Link></li>
                       <li><Link to="/tickets" className="hover:text-white transition-colors">Ticket Prices</Link></li>
                       <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                       <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                    </ul>
                 </div>

                 {/* Contact Info (Expanded) */}
                 <div className="md:col-span-2">
                    <h4 className="font-bold text-lg mb-6 text-appu-green">Contact Us</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-gray-400 text-sm">
                           <li className="flex gap-3 items-start">
                              <MapPin size={18} className="shrink-0 mt-1 text-appu-blue" /> 
                              <span>
                                  No.23 Pradhikaran Sector Indira Gandhi<br/>
                                  Udyan Nigdi, Pune Maharashtra 411044
                              </span>
                           </li>
                           <li className="flex gap-3 items-start">
                              <Mail size={18} className="shrink-0 mt-1 text-appu-pink" /> 
                              <a href="mailto:appugharpune@gmail.com" className="hover:text-white transition-colors">appugharpune@gmail.com</a>
                           </li>
                        </ul>

                        <ul className="space-y-4 text-gray-400 text-sm">
                           <li>
                              <h5 className="font-bold text-appu-yellow mb-2 text-sm uppercase tracking-wide">Time: 9am to 9pm</h5>
                              <div className="flex gap-3 items-start">
                                <Headphones size={18} className="shrink-0 mt-1 text-appu-yellow" /> 
                                <div>
                                    <span className="block text-white font-bold">Call Centre</span>
                                    <a href="tel:9673448855" className="hover:text-white transition-colors">9673448855</a>
                                </div>
                              </div>
                           </li>
                           <li className="flex gap-3 items-start">
                              <PhoneCall size={18} className="shrink-0 mt-1 text-appu-purple" /> 
                              <div>
                                  <span className="block text-white font-bold">General Contact</span>
                                  <div className="flex flex-col gap-1">
                                      <a href="tel:+918263974474" className="hover:text-white transition-colors">+91 82639 74474</a>
                                      <a href="tel:+919890886666" className="hover:text-white transition-colors">+91 98908 86666</a>
                                  </div>
                              </div>
                           </li>
                        </ul>
                    </div>
                 </div>
              </div>
              
              {/* Copyright */}
              <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                 <p>&copy; {new Date().getFullYear()} Appu Ghar Pune. All rights reserved.</p>
              </div>
           </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;