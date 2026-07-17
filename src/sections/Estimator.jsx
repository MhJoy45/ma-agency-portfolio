import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckSquare, Square, Calendar, DollarSign } from 'lucide-react';

const coreServices = [
  { id: 'web', name: 'Premium Web Development', price: 600, days: 14, desc: 'React/WordPress high-converting framework.' },
  { id: 'ecom', name: 'E-Commerce Infrastructure', price: 400, days: 10, desc: 'WooCommerce/Shopify deployment + setup.' },
  { id: 'gtm', name: 'Advanced GTM & Pixel Layer', price: 250, days: 4, desc: 'Conversion API, custom server-side data logs.' },
  { id: 'mkt', name: 'Digital Growth Campaign', price: 350, days: 7, desc: 'Targeted scaling and conversion optimization.' },
  { id: 'brand', name: 'Brand Identity & Graphics', price: 200, days: 5, desc: 'Vector catalogs, assets, visual blueprint.' }
];

export default function Estimator() {
  const [selected, setSelected] = useState(['web', 'gtm']);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    let price = 0;
    let days = 0;
    coreServices.forEach(s => {
      if (selected.includes(s.id)) {
        price += s.price;
        days += s.days;
      }
    });
    setTotalPrice(price);
    setTotalDays(days);
  }, [selected]);

  const toggleService = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <section id="estimator" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-brand-dark light:bg-slate-50 overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-lime/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
            Project Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900">
            BUDGET & TIME <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/50 light:from-slate-900 light:to-slate-700">ESTIMATOR</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checkbox Controls */}
          <div className="lg:col-span-7 space-y-3">
            {coreServices.map((service) => {
              const isChecked = selected.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer select-none transition-all duration-200 bg-[#141126]/40 light:bg-white shadow-sm ${
                    isChecked 
                      ? 'border-brand-purple light:border-brand-purple bg-[#141126]/90 light:bg-brand-purple/5 shadow-md shadow-brand-purple/5' 
                      : 'border-white/5 light:border-black/5 hover:border-white/10 light:hover:border-black/10'
                  }`}
                >
                  <div className="mt-1 text-brand-lime light:text-brand-purple">
                    {isChecked ? <CheckSquare className="w-4 h-4 fill-brand-lime/10 light:fill-brand-purple/10" /> : <Square className="w-4 h-4 text-brand-light/20 light:text-slate-300" />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm md:text-base font-bold text-brand-light light:text-slate-900">{service.name}</h4>
                    <p className="text-xs text-brand-light/50 light:text-slate-500 font-medium">{service.desc}</p>
                  </div>
                  <div className="ml-auto font-black text-xs md:text-sm text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-2.5 py-1 rounded-lg transition-colors">
                    +${service.price}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Status Output Panel */}
          <div className="lg:col-span-5 sticky top-28 bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/5 p-8 rounded-3xl backdrop-blur-xl space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-brand-light light:text-slate-900 border-b border-white/5 light:border-black/5 pb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-brand-lime light:text-brand-purple" /> Deployment Parameters
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-dark/60 light:bg-slate-50 p-4 rounded-xl border border-white/5 light:border-black/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-light/40 light:text-slate-400">
                  <DollarSign className="w-3 h-3 text-brand-lime light:text-brand-purple" /> Est. Cost
                </div>
                <div className="text-xl md:text-2xl font-black text-brand-light light:text-slate-900">${totalPrice}</div>
              </div>

              <div className="bg-brand-dark/60 light:bg-slate-50 p-4 rounded-xl border border-white/5 light:border-black/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-light/40 light:text-slate-400">
                  <Calendar className="w-3 h-3 text-brand-purple" /> Timeline
                </div>
                <div className="text-xl md:text-2xl font-black text-brand-light light:text-slate-900">~{totalDays} Days</div>
              </div>
            </div>

            <p className="text-[11px] text-brand-light/40 light:text-slate-400 font-semibold leading-relaxed">
              *Calculated values correspond to estimated development cycles. Strict multi-layer validation protocols apply upon pipeline validation.
            </p>

            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center bg-brand-lime text-brand-dark light:bg-brand-purple light:text-brand-light font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-brand-lime/90 light:hover:bg-brand-purple/90 transition-all shadow-md shadow-brand-lime/5 light:shadow-brand-purple/10 text-center cursor-pointer"
            >
              Deploy This Specification
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}