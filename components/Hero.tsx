import React from 'react';
import { Ticket, Search, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
      
      {/* Background Decor - Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-slate-50/50 dark:from-slate-900/50 dark:to-slate-950/50 -z-10" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-emerald-200/30 dark:bg-emerald-600/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl relative z-10">
        
        {/* Floating Logo with Tech Glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative group animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-900 p-2 rounded-full shadow-xl ring-1 ring-slate-900/5 dark:ring-slate-100/10">
              <img 
                src="https://vijayrajpandey.com/bdhlogo.jpg" 
                alt="BDH Vital Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-6 shadow-sm border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
          </span>
          BDH - UAE
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
          IT SUPPORT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-emerald-400">PORTAL</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium flex items-center justify-center gap-2 flex-wrap">
          <span>Fast</span> <span className="text-slate-300 dark:text-slate-700">•</span> 
          <span>Reliable</span> <span className="text-slate-300 dark:text-slate-700">•</span> 
          <span>24/7 Ready</span>
        </p>

        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
          Welcome to the centralized help desk for BDH IT. Submit tickets, track issues, or find quick solutions instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="/it-ticket-system/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <Ticket size={20} />
            Open New Ticket
          </a>
          
          <a
            href="/it-ticket-system/status.php"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
          >
            <Search size={20} className="text-slate-400 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400 transition-colors" />
            Check Status
          </a>

          <a
            href="/it-ticket-system/directory/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
          >
            <Users size={20} className="text-slate-400 group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400 transition-colors" />
            Staff Directory
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;