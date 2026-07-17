import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, FolderKanban } from 'lucide-react';

const categories = ['All', 'Development', 'Marketing', 'Branding'];

const projects = [
  {
    title: 'Mahantaverse Platform',
    category: 'Development',
    tags: ['WordPress', 'WooCommerce', 'n8n Workflow'],
    description: 'Custom optimized membership registration, testimonial sub-systems, and automated client access layers.',
    link: '#'
  },
  {
    title: 'Taskan Natural Honey',
    category: 'Marketing',
    tags: ['Facebook Ads', 'Conversion API', 'GTM Schema'],
    description: 'Complete data tracking layer framework and optimized conversion funnels resulting in maximum target scale.',
    link: '#'
  },
  {
    title: 'Shah Furniture & Doors',
    category: 'Branding',
    tags: ['Brand Strategy', 'Visual Identity', 'Catalog UI'],
    description: 'Developed premium storefront structural layouts, local SEO cataloging, and synchronized vector design sets.',
    link: '#'
  },
  {
    title: 'WahiWorld Corporate Hub',
    category: 'Development',
    tags: ['React Framework', 'Tailwind', 'Dynamic Copy'],
    description: 'High-performance interactive interface architecture optimized for global service deployment metrics.',
    link: '#'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-[#0a0718] light:bg-slate-50 overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900">
              ARCHITECTURAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/50 light:from-slate-900 light:to-slate-700">DEPLOYMENTS</span>
            </h2>
          </div>

          {/* Dynamic Interactive Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-brand-dark/60 light:bg-white border border-white/5 light:border-black/10 p-1.5 rounded-2xl backdrop-blur-md shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-brand-purple text-brand-light shadow-lg shadow-brand-purple/20'
                    : 'text-brand-light/40 light:text-slate-500 hover:text-brand-light light:hover:text-brand-purple hover:bg-white/5 light:hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Dynamic Grid Canvas */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative bg-[#141126]/40 light:bg-white border border-white/5 light:border-black/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-brand-purple/30 light:hover:border-brand-purple/30 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-6">
                  {/* Decorative Mockup Header */}
                  <div className="flex items-center justify-between border-b border-white/5 light:border-black/5 pb-4">
                    <div className="flex items-center gap-2">
                      <FolderKanban className="w-4 h-4 text-brand-lime light:text-brand-purple" />
                      <span className="text-[10px] uppercase font-bold text-brand-light/40 light:text-slate-400 tracking-widest">
                        {project.category} Matrix
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/10 light:bg-slate-200" />
                      <div className="w-2 h-2 rounded-full bg-white/10 light:bg-slate-200" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black tracking-tight text-brand-light light:text-slate-900 group-hover:text-brand-lime light:group-hover:text-brand-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-light/60 light:text-slate-600 font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* System Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-brand-purple light:text-brand-purple bg-brand-purple/10 light:bg-brand-purple/5 border border-brand-purple/20 light:border-brand-purple/10 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-auto flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-light light:text-slate-700 hover:text-brand-lime light:hover:text-brand-purple transition-colors group/btn"
                  >
                    Analyze Case Study
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <div className="w-8 h-8 rounded-xl bg-white/5 light:bg-slate-50 border border-white/5 light:border-black/5 flex items-center justify-center text-brand-light/40 light:text-slate-400 group-hover:text-brand-lime light:group-hover:text-brand-purple group-hover:border-brand-purple/40 light:group-hover:border-brand-purple/40 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}