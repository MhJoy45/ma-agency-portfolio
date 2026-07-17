import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-12 transition-colors duration-300 bg-brand-dark light:bg-slate-50">
      
      {/* Background Animated Gradient Mesh Trails */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-purple/15 light:bg-brand-purple/10 blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-lime/5 light:bg-brand-purple/5 blur-[150px]"
        />
        
        {/* Subtle decorative grid overlay lines updated for light/dark tracking */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Micro-badge tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/30 light:border-brand-purple/20 text-brand-light/90 light:text-brand-purple px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-lime dark:bg-brand-lime light:bg-brand-purple animate-pulse" />
          Next-Gen Digital Craftsmanship
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black tracking-tight text-brand-light light:text-slate-900 leading-[1.1]"
        >
          WE BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-light/90 light:from-slate-900 light:to-slate-700">DIGITAL</span>{' '}
          <span className="text-brand-lime light:text-brand-purple relative inline-block">
            ENGINE
            <span className="absolute bottom-2 left-0 w-full h-[4px] bg-brand-purple/40 light:bg-brand-lime/40 -z-10 rounded-full"></span>
          </span>
        </motion.h1>

        {/* Specialized Subheadline Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-brand-light/70 light:text-slate-600 font-medium leading-relaxed"
        >
          A specialized agency for bold brands: <br className="hidden sm:inline" />
          <span className="text-brand-light light:text-slate-900 font-semibold">Website Development</span> • UI/UX • Digital Marketing • Web Analytics.
        </motion.p>

        {/* Action Controls Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href="#services" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-lime text-brand-dark light:bg-brand-purple light:text-brand-light hover:bg-brand-lime/90 light:hover:bg-brand-purple/90 font-bold px-8 py-4 rounded-full shadow-xl shadow-brand-lime/10 light:shadow-brand-purple/10 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-brand-light light:text-slate-700 hover:text-brand-lime light:hover:text-brand-purple border border-brand-light/20 light:border-black/10 hover:border-brand-lime/30 light:hover:border-brand-purple/30 px-8 py-4 rounded-full font-bold transition-all duration-300"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}