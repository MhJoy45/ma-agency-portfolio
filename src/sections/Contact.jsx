import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, ArrowRight } from 'lucide-react';
// EmailJS লাইব্রেরি ইম্পোর্ট
import emailjs from '@emailjs/browser';

// ⚠️ এখানে আপনার EmailJS ড্যাশবোর্ড থেকে পাওয়া ৩টি আইডি বসান:
const EMAILJS_SERVICE_ID = "service_0si3wji";   // যেমন: "service_xxxxxx"
const EMAILJS_TEMPLATE_ID = "template_8mzasvh"; // যেমন: "template_xxxxxx"
const EMAILJS_PUBLIC_KEY = "bqgy3hpwT-ijX2Wz-";   // যেমন: "YOUR_PUBLIC_KEY"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ─── ২. WEB ANALYTICS PIPELINE (GTM & PIXEL TRACKING) ───
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_form_submit',
      form_name: 'Client Intake Pipeline',
      client_brand: formState.name,
      secure_channel: formState.email
    });

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Digital Deployment Request',
        status: 'Submitted'
      });
    }

    // ─── ৩. EMAILJS ROUTING PIPELINE ───
    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      message: formState.message,
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
      alert("Transmission failed. Please check your keys or try again.");
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5 light:border-black/5 bg-brand-dark light:bg-slate-50 transition-colors duration-300">
      
      {/* Background Technical Mesh Glow matching brand theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-lime/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Brand Messaging */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-lime light:text-brand-purple bg-brand-lime/10 light:bg-brand-purple/10 px-3 py-1 rounded-full">
              Inbound Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-light light:text-slate-900 leading-none">
              INITATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-purple/60 light:from-slate-900 light:to-slate-700">DIGITAL DEPLOYMENT</span>
            </h2>
            <p className="text-sm md:text-base text-brand-light/60 light:text-slate-600 font-medium leading-relaxed max-w-md">
              Ready to scale up your infrastructure? Submit your configuration parameters, and our engineering team will respond within 24 operational hours.
            </p>

            <div className="pt-6 space-y-4 border-t border-white/5 light:border-black/5">
              <div className="flex items-center gap-3 text-sm text-brand-light/70 light:text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 light:bg-brand-purple/5 border border-brand-purple/20 light:border-brand-purple/10 flex items-center justify-center text-brand-lime light:text-brand-purple">
                  <Mail className="w-4 h-4" />
                </div>
                hello@ma-agency.internal
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Element */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#141126]/60 light:bg-white border border-white/5 light:border-black/5 p-8 md:p-10 rounded-3xl backdrop-blur-xl overflow-hidden group hover:border-brand-purple/30 light:hover:border-brand-purple/30 transition-all duration-300 shadow-sm"
            >
              {/* Top accent line matching modern brand feel */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-lime/20 border border-brand-lime text-brand-lime light:bg-brand-purple/10 light:border-brand-purple light:text-brand-purple flex items-center justify-center mx-auto">
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-light light:text-slate-900">Transmission Received Successfully</h3>
                  <p className="text-xs text-brand-light/50 light:text-slate-500 max-w-xs mx-auto font-medium">
                    Your parameters have been logged. Check your inbound secure channel for setup verification shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-brand-lime light:text-brand-purple hover:text-brand-light light:hover:text-slate-900 transition-colors tracking-wider uppercase cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Client Identifier Input */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-brand-light/40 light:text-slate-400 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-brand-lime light:text-brand-purple" /> Client Name / Brand
                    </label>
                    <input 
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Joy Mahanta"
                      className="w-full bg-[#0a0718]/60 light:bg-slate-50 border border-white/10 light:border-black/10 rounded-xl px-4 py-3.5 text-sm text-brand-light light:text-slate-900 placeholder:text-brand-light/20 light:placeholder:text-slate-400 focus:border-brand-purple/60 light:focus:border-brand-purple/60 focus:outline-none transition-colors duration-200 font-medium"
                    />
                  </div>

                  {/* Channel Input */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-brand-light/40 light:text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-brand-lime light:text-brand-purple" /> Secure Email Channel
                    </label>
                    <input 
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full bg-[#0a0718]/60 light:bg-slate-50 border border-white/10 light:border-black/10 rounded-xl px-4 py-3.5 text-sm text-brand-light light:text-slate-900 placeholder:text-brand-light/20 light:placeholder:text-slate-400 focus:border-brand-purple/60 light:focus:border-brand-purple/60 focus:outline-none transition-colors duration-200 font-medium"
                    />
                  </div>

                  {/* Specifications Textarea */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest uppercase text-brand-light/40 light:text-slate-400 flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-brand-lime light:text-brand-purple" /> Architecture Specifications
                    </label>
                    <textarea 
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your developmental scope, conversion tracking parameters, or architectural requirements..."
                      className="w-full bg-[#0a0718]/60 light:bg-slate-50 border border-white/10 light:border-black/10 rounded-xl px-4 py-3.5 text-sm text-brand-light light:text-slate-900 placeholder:text-brand-light/20 light:placeholder:text-slate-400 focus:border-brand-purple/60 light:focus:border-brand-purple/60 focus:outline-none transition-colors duration-200 font-medium resize-none leading-relaxed"
                    />
                  </div>

                  {/* Operational Launch Trigger Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-lime text-brand-dark light:bg-brand-purple light:text-brand-light hover:bg-brand-lime/90 light:hover:bg-brand-purple/90 font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 text-sm shadow-xl shadow-brand-lime/10 light:shadow-brand-purple/10 tracking-wide transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? 'Transmitting Data...' : 'Deploy Request Parameters'}
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}