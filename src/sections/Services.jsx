import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Megaphone, BarChart3, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Building ultra-fast, responsive, and secure custom web applications engineered with modern production frameworks.',
    tag: 'Web Tech'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Crafting premium, high-converting design systems and human-centered digital experiences that maximize engagement.',
    tag: 'Creative'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven visibility campaigns, search ranking architectures, and performance-focused targeted ad systems.',
    tag: 'Growth'
  },
  {
    icon: BarChart3,
    title: 'Web Analytics',
    description: 'Deploying robust behavior event engines, tracking pixels, and deep custom conversion measurement pipelines.',
    tag: 'Data'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-brand-dark/30 light:bg-white transition-colors duration-300">
      
      {/* Structural Accent Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header Layout */}
        <div className="text-center md:text-left mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900">
            OUR INTEGRATED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/60 light:from-slate-900 light:to-slate-700">SERVICES ENGINE</span>
          </h2>
        </div>

        {/* Dynamic Interactive Cards Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/5 hover:border-brand-purple/50 light:hover:border-brand-purple/50 p-8 rounded-2xl transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Micro Light Streak Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div>
                  {/* Category Tracker Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-purple/10 light:bg-brand-purple/5 rounded-xl border border-white/5 light:border-black/5 text-brand-lime light:text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-light transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-light/40 light:text-slate-500 group-hover:text-brand-lime transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Text Detail Info */}
                  <h3 className="text-xl font-bold text-brand-light light:text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-light/60 light:text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Interactive Link Element */}
                <div className="mt-8 flex items-center gap-1.5 text-xs font-bold text-brand-light/40 light:text-slate-500 group-hover:text-brand-light light:group-hover:text-brand-purple transition-colors duration-300 pt-4 border-t border-white/5 light:border-black/5">
                  Analyze Framework 
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}