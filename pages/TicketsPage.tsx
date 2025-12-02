import React from 'react';
import { Check, Info, Ticket, AlertTriangle, CreditCard, Ruler, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TicketsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7FF] pt-20 pb-20">
      
      {/* Hero Header */}
      <section className="bg-appu-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-appu-pink/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/30">
            <Ticket size={16} />
            <span>Gate Entry & Packages</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">Choose Your Ticket</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Select the perfect plan for your day of fun! Choose between our value-packed all-access band or a simple entry ticket.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* Payment Warning Banner */}
        <div className="max-w-4xl mx-auto bg-yellow-50 border-l-8 border-appu-yellow rounded-r-xl p-4 md:p-6 shadow-lg mb-12 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-3 bg-white rounded-full text-appu-yellow shadow-sm shrink-0">
                <AlertTriangle size={24} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-lg">Important Payment Information</h3>
                <p className="text-gray-700 font-medium">
                   <span className="text-red-600 font-bold">Debit & Credit Cards are NOT Accepted.</span> PayTM is accepted for Packages only. Please carry cash for entry tickets and food.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Option 1: Special Package (Highlighted) */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border-4 border-appu-pink transform hover:-translate-y-2 transition-all duration-300 group">
             {/* Best Value Badge */}
             <div className="absolute top-0 right-0 bg-appu-pink text-white text-xs font-black px-8 py-2 rounded-bl-2xl uppercase tracking-widest z-10">
                 Most Popular
             </div>
             
             <div className="bg-gradient-to-b from-pink-50 to-white p-8 md:p-10 text-center border-b border-pink-100">
                <h2 className="text-appu-pink font-bold tracking-widest uppercase text-sm mb-2">Option 1</h2>
                <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-4">Special Discounted Package</h3>
                <p className="text-gray-600 font-medium max-w-md mx-auto">
                    Avoid the queues! Get entry plus access to all rides in one go.
                </p>
             </div>

             <div className="p-8 md:p-10 space-y-8">
                {/* Pricing Block */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-2xl border border-pink-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-appu-pink font-bold shadow-sm">
                                <Ruler size={18} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-800">Adults</p>
                                <p className="text-xs text-gray-500 font-bold">Above 3.5 feet height</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-3xl font-black text-gray-900">₹599</p>
                             <p className="text-xs text-gray-400">per person</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-2xl border border-pink-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-appu-pink font-bold shadow-sm">
                                <Ruler size={18} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-800">Children</p>
                                <p className="text-xs text-gray-500 font-bold">Up to 3.5 feet height</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-3xl font-black text-gray-900">₹499</p>
                             <p className="text-xs text-gray-400">per person</p>
                        </div>
                    </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 mb-2">What's Included:</h4>
                    <li className="flex gap-3 text-gray-600 font-medium">
                        <Check className="text-green-500 shrink-0" size={20} /> Park Entry
                    </li>
                    <li className="flex gap-3 text-gray-600 font-medium">
                        <Check className="text-green-500 shrink-0" size={20} /> All Rides (One time each)
                    </li>
                    <li className="flex gap-3 text-gray-600 font-medium">
                        <Check className="text-green-500 shrink-0" size={20} /> Wristband for easy access
                    </li>
                    <li className="flex gap-3 text-gray-400 font-medium line-through decoration-red-400 decoration-2">
                        <XCircle className="text-red-400 shrink-0" size={20} /> Food & Go-Karting
                    </li>
                </div>

                <div className="text-center pt-4">
                    <p className="text-xs text-gray-400 mb-4">
                        *Shows valid for respective age/height groups only.
                    </p>
                    <button className="w-full bg-appu-pink text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 hover:shadow-xl hover:bg-pink-600 transition-all active:scale-95">
                        Choose Package
                    </button>
                </div>
             </div>
          </div>

          {/* Option 2: Entry Only */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
             <div className="bg-gray-50 p-8 md:p-10 text-center border-b border-gray-100">
                <h2 className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2">Option 2</h2>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Entry Only Ticket</h3>
                <p className="text-gray-500 font-medium max-w-xs mx-auto">
                    Pay for entry now and purchase individual ride tickets inside.
                </p>
             </div>

             <div className="p-8 md:p-10 flex flex-col flex-1 gap-8">
                 {/* Pricing Block */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                <Ruler size={18} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-800">Adults</p>
                                <p className="text-xs text-gray-500 font-bold">Above 3.5 ft</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-3xl font-black text-gray-900">₹100</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                                <Ruler size={18} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-800">Children</p>
                                <p className="text-xs text-gray-500 font-bold">Up to 3.5 ft</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="text-3xl font-black text-gray-900">₹50</p>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-auto">
                    <h4 className="flex items-center gap-2 font-bold text-appu-blue mb-2">
                        <Info size={18} /> How it works:
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Purchase this ticket to enter the park. Once inside, you can visit ticket counters near each ride to pay for them individually as you play.
                    </p>
                </div>

                <button className="w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:border-gray-400 hover:text-gray-900 transition-colors">
                    Plan for Entry Only
                </button>
             </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Group Booking?</h3>
            <p className="text-gray-600 mb-6">Planning a school trip or a corporate outing? Contact us for special group rates and arrangements.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-appu-pink font-bold hover:underline">
                Contact our Sales Team <ArrowRightIcon />
            </Link>
        </div>
      </div>
    </div>
  );
};

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
)

export default TicketsPage;
