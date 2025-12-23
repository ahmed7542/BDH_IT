import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Quick Fixes', href: '#quick-fixes' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://vijayrajpandey.com/bdhlogo.jpg"
            alt="BDH Logo"
            className="h-10 w-10 object-cover rounded-full ring-2 ring-slate-100 dark:ring-slate-800 shadow-sm"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">
              BDH IT
            </h1>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase">
              Support Portal
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;