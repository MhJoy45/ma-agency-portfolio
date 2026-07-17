import React from 'react';
import { motion } from 'framer-motion';

const reviewsRow1 = [
  {
    name: 'Bruno Elam',
    role: 'International Supply Lead',
    feedback: 'The e-commerce pipelines and manufacturing logic engineered here completely automated our client fulfillment workflows.'
  },
  {
    name: 'Jahid Islam',
    role: 'Managing Director, SFD',
    feedback: 'Rebuilding our modern business storefront catalog layout completely optimized our technical search indexing and local conversion visibility.'
  },
  {
    name: 'Sarah K.',
    role: 'Product Owner, Taskan Engine',
    feedback: 'The high-converting design systems and custom pixel behaviors transformed how we monitor tracking parameters.'
  }
];

const reviewsRow2 = [
  {
    name: 'Alex Mercer',
    role: 'Founder, WahiWorld Global',
    feedback: 'Targeted brand visibility frameworks combined with pristine optimized technical copy models scaled our international pipelines.'
  },
  {
    name: 'Elena R.',
    role: 'Director, Mahantaverse Ecosystem',
    feedback: 'The automated membership registration workflows and secure shortcode implementations exceeded all structural goals.'
  },
  {
    name: 'David V.',
    role: 'Operations Lead',
    feedback: 'Outstanding technical precision. Our data layer event infrastructure handles conversion metrics flawlessly.'
  }
];

// Reusable Marquee Row component for fluid loop animations
function MarqueeRow({ items, direction = 'left', speed = 25 }) {
  const baseTranslation = direction === 'left' ? [0, '-50%'] : ['-50%', '0%'];
  
  // Duplicate array items to facilitate absolute seamless looping points
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full relative py-2 mask-gradient select-none">
      <motion.div
        animate={{ x: baseTranslation }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-6 whitespace-nowrap min-w-full"
      >
        {loopItems.map((item, index) => (
          <div
            key={index}
            className="inline-block w-[350px] sm:w-[420px] bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/5 hover:border-brand-purple/30 light:hover:border-brand-purple/30 p-6 rounded-2xl backdrop-blur-md transition-colors duration-300 shadow-sm"
          >
            <p className="text-xs sm:text-sm text-brand-light/70 light:text-slate-600 leading-relaxed font-medium whitespace-normal mb-4 italic">
              "{item.feedback}"
            </p>
            <div className="flex items-center gap-3 border-t border-white/5 light:border-black/5 pt-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple/30 to-brand-lime/20 light:from-brand-purple/10 light:to-brand-purple/5 border border-white/10 light:border-brand-purple/10 flex items-center justify-center font-black text-[10px] text-brand-lime light:text-brand-purple">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-light light:text-slate-900 tracking-tight">{item.name}</h4>
                <p className="text-[10px] text-brand-light/40 light:text-slate-500 font-semibold uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-white/5 light:border-black/5 bg-[#0a0718] light:bg-slate-50 overflow-hidden relative transition-colors duration-300">
      
      {/* Background Ambience Spotlights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
          Validation Data
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900 mt-4">
          TRUSTED BY ACCELERATING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/50 light:from-slate-900 light:to-slate-700">ENTERPRISES</span>
        </h2>
      </div>

      {/* Infinite Scrolling Tiers Wrapper */}
      <div className="space-y-6 w-full relative z-10">
        <MarqueeRow items={reviewsRow1} direction="left" speed={30} />
        <MarqueeRow items={reviewsRow2} direction="right" speed={35} />
      </div>

      {/* Tailwind Inline CSS styling injection override for smooth fading masking effect */}
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  );
}