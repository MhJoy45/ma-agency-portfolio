import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // থিম পরিবর্তনের লজিক (HTML ট্যাগে class যুক্ত/মুছে ফেলা)
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 light:border-black/5 bg-brand-dark/70 light:bg-white/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand Mark */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative text-2xl font-black tracking-tighter text-brand-light light:text-slate-900 flex items-center">
              <span>M</span>
              <span className="text-brand-purple relative">A
                <span className="absolute right-[-4px] top-0 w-1 h-full bg-brand-lime rounded-full transform scale-y-75 group-hover:scale-y-100 transition-transform duration-300"></span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-light/70 light:text-slate-600 hover:text-brand-lime light:hover:text-brand-purple transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-lime light:bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Controls (Theme Switcher + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Neon Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Theme Mode"
              className="p-2.5 rounded-xl bg-white/5 light:bg-slate-100 border border-white/5 light:border-black/10 text-brand-lime light:text-brand-purple hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-1 bg-brand-purple hover:bg-brand-purple/80 text-brand-light text-sm font-semibold px-5 py-2.5 rounded-full border border-white/10 shadow-lg transition-all duration-300 hover:shadow-brand-purple/20"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions Overlay (Hamburger & Switcher) */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle Theme Mode"
              className="p-2 rounded-xl bg-white/5 light:bg-slate-100 border border-white/5 light:border-black/10 text-brand-lime light:text-brand-purple transition-all"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-light/80 light:text-slate-700 hover:text-brand-lime transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 w-full bg-brand-dark/95 light:bg-white/95 backdrop-blur-lg md:hidden border-t border-white/5 light:border-black/5"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-brand-light light:text-slate-900 hover:text-brand-lime light:hover:text-brand-purple transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-lime light:bg-brand-purple text-brand-dark light:text-brand-light text-base font-bold py-3 rounded-xl shadow-lg"
              >
                Let's Talk
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}