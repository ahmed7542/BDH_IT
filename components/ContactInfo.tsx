import React from 'react';
import { Phone, Headset } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-blue-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        
        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">Urgent Support</p>
            <p className="text-xl font-bold text-slate-800 dark:text-slate-100">Extension 703</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
          <div className="p-2 bg-slate-200/50 dark:bg-slate-800 rounded-full">
            <Headset size={20} />
          </div>
          <p className="font-medium">Direct line for critical system failures</p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;