import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Estimator from './sections/Estimator';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import MouseEffect from './components/MouseEffect'; // ➔ এই লাইনটি যুক্ত করুন

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark light:bg-slate-50 text-brand-light light:text-slate-900 selection:bg-brand-lime selection:text-brand-dark antialiased relative transition-colors duration-300">
      
      {/* ১. কাস্টম ইন্টারেক্টিভ ক্যানভাস মাউস ইফেক্ট */}
      <MouseEffect />

      {/* ২. হাই-পারফরম্যান্স অ্যাম্বিয়েন্ট ব্যাকগ্রাউন্ড গ্লো */}
      <div 
        className="hidden md:block pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-40 mix-blend-screen light:mix-blend-multiply light:opacity-20"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.08), transparent 80%)`
        }}
      />

      <Header />

      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Estimator />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}