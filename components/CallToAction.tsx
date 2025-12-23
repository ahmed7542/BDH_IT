import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full -ml-10 -mb-10 blur-xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Still need help?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Our specialized team is ready to assist you. Submit a ticket and we'll get back to you immediately.
        </p>
        
        <a
          href="/it-ticket-system/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-emerald-900/20 transition-all transform hover:scale-105"
        >
          Open Support Ticket Now
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;