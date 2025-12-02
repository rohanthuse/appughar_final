import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService';
import { PlannerResponse } from '../types';
import { Wand2, Loader2, Clock, Coffee, Ticket, AlertCircle, Sparkles } from 'lucide-react';

const AiPlannerPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<PlannerResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlan = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setPlan(null);

    try {
      const result = await generateItinerary(prompt);
      if (result) {
        setPlan(result);
      } else {
        setError("Oops! Appu couldn't make a plan right now. Try again later!");
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'RIDE': return <Ticket className="text-appu-blue" />;
      case 'FOOD': return <Coffee className="text-appu-pink" />;
      case 'REST': return <Clock className="text-appu-green" />;
      default: return <AlertCircle className="text-appu-yellow" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-20">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-appu-purple font-bold shadow-sm mb-6 border border-purple-100">
             <Sparkles size={16} />
             <span>AI Powered Magic</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6">
            Plan Your Perfect Day
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell "Appu" who is coming (e.g., "A thrill-seeking couple" or "Family with a 5-year-old"), and get a custom itinerary instantly!
          </p>
        </div>

        {/* Input Area */}
        <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-3 border-2 border-purple-100 relative z-10">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 2 adults and 2 kids who love water rides..."
            className="flex-1 px-6 py-4 rounded-[2rem] text-lg outline-none bg-gray-50 focus:bg-white transition-colors placeholder-gray-400"
            onKeyDown={(e) => e.key === 'Enter' && handlePlan()}
          />
          <button
            onClick={handlePlan}
            disabled={isLoading || !prompt.trim()}
            className="bg-appu-purple text-white px-8 py-4 rounded-[2rem] font-bold text-lg hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 min-w-[180px] shadow-lg hover:shadow-purple-200"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <><Wand2 size={20} /> Create Plan</>}
          </button>
        </div>

        {/* Results Area */}
        {error && (
            <div className="mt-8 text-center text-red-500 bg-red-50 p-6 rounded-3xl border border-red-100 max-w-2xl mx-auto">
                {error}
            </div>
        )}

        {plan && (
          <div className="mt-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 relative">
               {/* Decorative header bg */}
               <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-appu-purple to-indigo-600"></div>

              <div className="relative p-6 md:p-10">
                <div className="bg-white rounded-3xl p-8 shadow-lg mb-8 mt-4">
                    <h3 className="text-2xl md:text-4xl font-black font-display text-gray-900 mb-4 text-center">{plan.title}</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {plan.tips.map((tip, i) => (
                            <span key={i} className="text-sm font-bold bg-yellow-50 text-yellow-700 border border-yellow-100 px-4 py-2 rounded-full">💡 {tip}</span>
                        ))}
                    </div>
                </div>
                
                <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                    <div className="space-y-0">
                        {plan.schedule.map((item, idx) => (
                            <div key={idx} className="flex gap-6 relative pb-10 last:pb-0 group">
                                {/* Timeline Line */}
                                {idx !== plan.schedule.length - 1 && (
                                    <div className="absolute left-[26px] top-12 bottom-0 w-1 bg-gray-100 group-hover:bg-purple-100 transition-colors"></div>
                                )}
                                
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-appu-purple transition-all duration-300">
                                        {getIcon(item.icon)}
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-xs font-black text-gray-500 mb-2">{item.time}</span>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.activity}</h4>
                                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar / Checklist */}
                    <div className="bg-[#FFF9F0] rounded-3xl p-8 h-fit border border-orange-100 sticky top-24">
                        <h4 className="font-bold text-gray-900 mb-6 text-xl font-display">Adventure Checklist</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><CheckIcon /></div>
                                Comfortable Shoes
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><CheckIcon /></div>
                                Sunscreen / Hat
                            </li>
                             <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0"><CheckIcon /></div>
                                Water Bottle
                            </li>
                             <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><CheckIcon /></div>
                                Camera/Phone
                            </li>
                        </ul>
                        <button className="w-full mt-8 bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                            Print Itinerary
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

export default AiPlannerPage;