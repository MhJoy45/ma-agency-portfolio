import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Code2, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Platforms Engineered' },
  { value: '99.9%', label: 'Infrastructure Uptime' },
  { value: '$12M+', label: 'Client Revenue Tracked' },
  { value: '4.9/5', label: 'Client Satisfaction' }
];

const steps = [
  {
    icon: Lightbulb,
    phase: '01',
    title: 'Discovery & Analytics',
    description: 'We audit your existing data structure, track technical leakage, and reverse-engineer competitor pipelines.'
  },
  {
    icon: Layers,
    phase: '02',
    title: 'Architecture Blueprint',
    description: 'Crafting premium, high-converting interactive UI layout designs and setting up conversion tracking models.'
  },
  {
    icon: Code2,
    phase: '03',
    title: 'Agile Implementation',
    description: 'Engineering ultra-fast frameworks using pristine modern production code, responsive assets, and full pixel setups.'
  },
  {
    icon: ShieldCheck,
    phase: '04',
    title: 'Deployment & Optimization',
    description: 'Launching your digital engine with secure channels, strict server validation, and continuous tracking maintenance.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-brand-dark light:bg-slate-50 overflow-hidden transition-colors duration-300">
      
      {/* Aesthetic Tech Background Trails updated for light variance */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-brand-lime/5 light:bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-brand-purple/5 light:bg-brand-lime/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* ─── METRICS STATS BAND ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#141126]/40 light:bg-white border border-white/5 light:border-black/5 p-8 rounded-3xl backdrop-blur-md shadow-sm">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-1"
            >
              <div className="text-3xl md:text-4xl font-black text-brand-lime light:text-brand-purple tracking-tight">{stat.value}</div>
              <div className="text-xs font-semibold text-brand-light/50 light:text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ─── PROCESS TIMELINE LAYOUT ─── */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
              Execution Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900">
              OUR DEPLOYMENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/50 light:from-slate-900 light:to-slate-700">ROADMAP</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/5 hover:border-brand-purple/40 light:hover:border-brand-purple/40 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-brand-purple/10 light:bg-brand-purple/5 rounded-xl text-brand-lime light:text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-light transition-colors duration-300">
                        <IconComponent className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="text-2xl font-black text-brand-light/10 light:text-slate-200 group-hover:text-brand-lime/20 light:group-hover:text-brand-purple/20 transition-colors">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-light light:text-slate-900 tracking-tight group-hover:text-brand-lime light:group-hover:text-brand-purple transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-brand-light/60 light:text-slate-600 font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}