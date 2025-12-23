import React from 'react';
import { LayoutDashboard, Bot } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
            © 2025 BDH IT – Information Technology Department
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Dedicated to excellence in technical support.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/it-ticket-system/actionlogin.php"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors font-medium group"
          >
            <LayoutDashboard size={16} className="group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            Engineer Dashboard
          </a>
          
          <a
            href="/it-ticket-system/ai.php"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors font-medium group"
          >
            <Bot size={16} className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            AI Bot
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;