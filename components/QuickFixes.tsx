import React from 'react';
import { 
  Power, 
  Cable, 
  Usb, 
  Printer, 
  Trash2, 
  Wifi, 
  RefreshCcw, 
  Laptop2 
} from 'lucide-react';
import { QuickFixItem } from '../types';

const fixItems: QuickFixItem[] = [
  { id: '1', title: 'Restart Computer', icon: Power, description: 'Fixes 80% of minor glitches.' },
  { id: '2', title: 'Check Cables', icon: Cable, description: 'Ensure all connections are tight.' },
  { id: '3', title: 'Try USB Port', icon: Usb, description: 'Switch ports to test peripherals.' },
  { id: '4', title: 'Restart Printer', icon: Printer, description: 'Hold power for 10 seconds.' },
  { id: '5', title: 'Clear Cache', icon: Trash2, description: 'Resolve browser loading errors.' },
  { id: '6', title: 'Reconnect Wi-Fi', icon: Wifi, description: 'Forget network and rejoin.' },
  { id: '7', title: 'Windows Update', icon: RefreshCcw, description: 'Install pending system updates.' },
  { id: '8', title: 'Another Device', icon: Laptop2, description: 'Isolate the issue by swapping.' },
];

const QuickFixes: React.FC = () => {
  return (
    <section id="quick-fixes" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Quick Fixes – Try These First!
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Resolve common technical issues quickly on your own before opening a support ticket.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fixItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-md dark:hover:shadow-blue-900/10 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-100 dark:group-hover:border-blue-500/30 transition-colors shadow-sm">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFixes;