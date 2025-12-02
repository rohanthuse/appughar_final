import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService';
import { PlannerResponse } from '../types';
import { Wand2, Loader2, Clock, Coffee, Ticket, AlertCircle } from 'lucide-react';

const AiPlanner: React.FC = () => {
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
    <section id="planner" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 animate-bounce-slow">
            <span className="text-4xl">🐘</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Ask Appu to Plan Your Day!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell our AI assistant who is coming (e.g., "A thrill-seeking couple" or "Family with a 5-year-old"), and we'll create the perfect magic schedule.
          </p>
        </div>

        {/* Input Area */}
        <div className="bg-white p-2 rounded-[2rem] shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2 border border-purple-100">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 2 adults and 2 kids who love water rides..."
            className="flex-1 px-6 py-4 rounded-[1.5rem] text-lg outline-none bg-transparent placeholder-gray-400"
            onKeyDown={(e) => e.key === 'Enter' && handlePlan()}
          />
          <button
            onClick={handlePlan}
            disabled={isLoading || !prompt.trim()}
            className="bg-appu-purple text-white px-8 py-4 rounded-[1.5rem] font-bold text-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 min-w-[160px]"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <><Wand2 size={20} /> Magic Plan</>}
          </button>
        </div>

        {/* Results Area */}
        {error && (
            <div className="mt-8 text-center text-red-500 bg-red-50 p-4 rounded-2xl border border-red-100">
                {error}
            </div>
        )}

        {plan && (
          <div className="mt-12 animate-in slide-in-from-bottom-8 duration-500 fade-in">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
              <div className="bg-appu-purple p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold font-display">{plan.title}</h3>
                <div className="flex gap-2 mt-2 opacity-80 overflow-x-auto pb-2">
                    {plan.tips.slice(0, 3).map((tip, i) => (
                        <span key={i} className="text-sm bg-white/20 px-3 py-1 rounded-full whitespace-nowrap">💡 {tip}</span>
                    ))}
                </div>
              </div>
              
              <div className="p-6 md:p-8 grid gap-8 md:grid-cols-[1fr_auto]">
                <div className="space-y-6">
                    {plan.schedule.map((item, idx) => (
                        <div key={idx} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-appu-purple/10 transition-colors shadow-sm">
                                    {getIcon(item.icon)}
                                </div>
                                {idx !== plan.schedule.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-gray-100 my-2 group-hover:bg-purple-100 transition-colors"></div>
                                )}
                            </div>
                            <div className="pb-4">
                                <span className="text-sm font-bold text-appu-purple">{item.time}</span>
                                <h4 className="text-lg font-bold text-gray-800">{item.activity}</h4>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Summary (Decorative) */}
                <div className="hidden md:block w-72 bg-yellow-50 rounded-2xl p-6 border border-yellow-100 h-fit">
                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Don't Forget!</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex gap-2"><span className="text-appu-blue">●</span> Sunscreen & Hat</li>
                        <li className="flex gap-2"><span className="text-appu-pink">●</span> Water Bottle</li>
                        <li className="flex gap-2"><span className="text-appu-green">●</span> Comfortable Shoes</li>
                        <li className="flex gap-2"><span className="text-appu-purple">●</span> Camera for memories</li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-yellow-200">
                        <button className="w-full bg-appu-yellow text-black font-bold py-3 rounded-xl hover:brightness-105 transition-all">
                            Save Itinerary
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AiPlanner;
