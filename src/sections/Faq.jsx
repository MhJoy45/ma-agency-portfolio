import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What tracking and analytics configurations are deployed by default?",
    answer: "Every platform we design comes standard with unified Google Tag Manager (GTM) setups, custom data layer schemas, server-side data routing hooks, and custom conversion pixels (Facebook/Meta, Google Ads). This ensures flawless end-to-end data tracking."
  },
  {
    question: "Can we integrate automated lead ingestion with workflows like n8n?",
    answer: "Absolutely. We specialize in building secure data pipelines. Your contact interfaces can easily be linked to automated systems (n8n, Make, or custom microservice webhooks) to handle instant CRM routing, automated messaging, and automated scheduling."
  },
  {
    question: "How long does a premium UI/UX platform build typically take?",
    answer: "Standard infrastructure blueprints and deployment sprints take 2 to 4 weeks depending on the technical integration scope. We run rigorous performance cycles to ensure high performance, speed indexing, and cross-device responsiveness."
  },
  {
    question: "Do you offer post-deployment architecture support?",
    answer: "Yes. We supply 30 days of standard post-launch tracking audits and server optimization metrics. Ongoing technical retainers are available for tracking adjustments, automated database maintenance, and continuous optimization scripts."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-white/5 light:border-black/5 bg-[#141126]/40 light:bg-white rounded-2xl overflow-hidden backdrop-blur-md transition-colors duration-300 hover:border-brand-purple/30 light:hover:border-brand-purple/30 shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
      >
        <div className="flex items-center gap-3.5 pr-4">
          <HelpCircle className="w-4 h-4 text-brand-lime light:text-brand-purple flex-shrink-0" />
          <span className="text-sm md:text-base font-bold text-brand-light light:text-slate-900 tracking-tight transition-colors">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-brand-light/40 light:text-slate-400 group-hover:text-brand-light light:group-hover:text-brand-purple"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-brand-light/60 light:text-slate-600 font-medium leading-relaxed border-t border-white/5 light:border-black/5 bg-[#0a0718]/30 light:bg-slate-50/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-brand-dark light:bg-slate-50 transition-colors duration-300">
      {/* Structural ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/5 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block Layout */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
            Technical FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900">
            FREQUENTLY LOGGED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/50 light:from-slate-900 light:to-slate-700">QUESTIONS</span>
          </h2>
        </div>

        {/* Dynamic Accordion Matrix Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}