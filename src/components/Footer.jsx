import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark light:bg-slate-100 border-t border-white/5 light:border-black/5 py-12 px-6 relative overflow-hidden transition-colors duration-300">
      {/* Subtle ambient mesh glow */}
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand System Identifiers */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-lime to-brand-purple flex items-center justify-center text-brand-dark font-black text-xs">
            M
          </div>
          <span className="text-sm font-bold tracking-wider text-brand-light light:text-slate-900 uppercase">
            MA <span className="text-brand-lime light:text-brand-purple">AGENCY</span>
          </span>
        </div>

        {/* Structural Navigation Maps */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold text-brand-light/40 light:text-slate-500">
          <a href="#home" className="hover:text-brand-lime light:hover:text-brand-purple transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-lime light:hover:text-brand-purple transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand-lime light:hover:text-brand-purple transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-lime light:hover:text-brand-purple transition-colors">Contact</a>
        </div>

        {/* Operational Legal Copy & Top Action Trigger */}
        <div className="flex items-center gap-6">
          <p className="text-[11px] text-brand-light/30 light:text-slate-400 font-medium tracking-wide">
            © {new Date().getFullYear()} MA Agency. All systems operational.
          </p>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/10 text-brand-light/60 light:text-slate-500 hover:text-brand-lime light:hover:text-brand-purple hover:border-brand-purple/30 light:hover:border-brand-purple/30 transition-all duration-300 backdrop-blur-md group shadow-sm cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}