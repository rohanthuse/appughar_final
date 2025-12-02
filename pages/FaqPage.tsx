import React, { useState } from 'react';
import { ChevronDown, Search, Ticket, Zap, Coffee, Info, HelpCircle } from 'lucide-react';

interface FaqCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const CATEGORIES: FaqCategory[] = [
  { id: 'ALL', name: 'All Questions', icon: HelpCircle, color: 'text-gray-600', bgColor: 'bg-gray-100' },
  { id: 'GENERAL', name: 'General Info', icon: Info, color: 'text-appu-blue', bgColor: 'bg-blue-50' },
  { id: 'TICKETS', name: 'Tickets & Prices', icon: Ticket, color: 'text-appu-pink', bgColor: 'bg-pink-50' },
  { id: 'RIDES', name: 'Rides & Safety', icon: Zap, color: 'text-appu-purple', bgColor: 'bg-purple-50' },
  { id: 'SERVICES', name: 'Food & Services', icon: Coffee, color: 'text-appu-green', bgColor: 'bg-green-50' },
];

const FAQ_DATA = [
  {
    category: 'GENERAL',
    q: "What are the park timings?",
    a: "The park is open every day from 11:00 AM to 7:00 PM. Ticket counters close at 6:00 PM."
  },
  {
    category: 'GENERAL',
    q: "Is there a dress code?",
    a: "We recommend comfortable casual wear. For water rides, synthetic/nylon swimwear is mandatory. Cotton clothes are not allowed inside the water rides for safety reasons."
  },
  {
    category: 'GENERAL',
    q: "Is parking available?",
    a: "Yes, we have a large parking area for both two-wheelers and four-wheelers. Parking charges apply."
  },
  {
    category: 'TICKETS',
    q: "Do I need to book tickets online?",
    a: "Online booking is recommended to skip the queue, but tickets are also available at the park entrance counters."
  },
  {
    category: 'TICKETS',
    q: "Are there special rates for children?",
    a: "Yes! Children below a certain height (usually 3.5ft) have discounted entry rates. Toddlers below 2.5ft enter for free."
  },
  {
    category: 'TICKETS',
    q: "Can I cancel my ticket?",
    a: "Tickets once booked are non-refundable and non-transferable. However, in case of park closure due to rain or technical reasons, the management may offer validity extension."
  },
  {
    category: 'RIDES',
    q: "Are the rides safe?",
    a: "Absolutely. We follow strict international safety standards. All rides undergo daily inspections and maintenance checks by certified engineers."
  },
  {
    category: 'RIDES',
    q: "What if it rains?",
    a: "Some outdoor thrill rides may be temporarily stopped during heavy rain or lightning for safety. Indoor attractions and the food court remain open."
  },
  {
    category: 'RIDES',
    q: "Are there rides for senior citizens?",
    a: "Yes, we have gentle rides like the Appu Express train and visual attractions suitable for senior citizens."
  },
  {
    category: 'SERVICES',
    q: "Is outside food allowed?",
    a: "No, outside food and beverages are not allowed. We have a multi-cuisine food court serving hygienic and delicious vegetarian food inside the park."
  },
  {
    category: 'SERVICES',
    q: "Are lockers available?",
    a: "Yes, digital lockers are available near the entrance and water park area on a rental basis to keep your belongings safe."
  },
  {
    category: 'SERVICES',
    q: "Do you have first aid facilities?",
    a: "Yes, we have a dedicated First Aid center with trained staff available at all times during park hours."
  },
];

const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <span className="font-bold text-gray-800 text-lg group-hover:text-appu-purple transition-colors">{question}</span>
        <span className={`flex-shrink-0 ml-4 p-2 rounded-full bg-gray-50 text-appu-purple transition-all duration-300 ${isOpen ? 'rotate-180 bg-purple-100' : 'group-hover:bg-purple-50'}`}>
          <ChevronDown size={20} />
        </span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20">
      
      {/* Hero Header */}
      <section className="bg-appu-purple text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)]"></div>
        <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 rotate-12">?</div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">How can we help?</h1>
          <p className="text-xl text-purple-100 mb-8 font-medium">Find answers to commonly asked questions about tickets, rides, and park policies.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for answers (e.g., 'parking', 'food', 'rain')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-400/50 shadow-xl"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 container mx-auto max-w-6xl">
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border-2 ${
                activeCategory === cat.id 
                  ? 'border-appu-purple bg-white text-appu-purple shadow-lg scale-105' 
                  : 'border-transparent bg-white text-gray-500 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <cat.icon size={18} className={activeCategory === cat.id ? 'text-appu-purple' : cat.color} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-8 md:col-start-3 space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <FaqItem key={index} question={faq.q} answer={faq.a} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                      <Search size={24} className="text-gray-400" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-800 mb-2">No results found</h3>
                   <p className="text-gray-500">Try adjusting your search or browse the categories.</p>
                </div>
              )}
           </div>
        </div>

        {/* Still Need Help Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-4">Still have questions?</h2>
              <p className="text-blue-50 mb-8 max-w-xl mx-auto text-lg">Can't find the answer you're looking for? Our friendly support team is here to help you planning your perfect day!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="/#/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">Contact Support</a>
                 <a href="tel:+919876543210" className="bg-blue-600 border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">Call +91 98765 43210</a>
              </div>
           </div>
        </div>

      </section>
    </div>
  );
};

export default FaqPage;
