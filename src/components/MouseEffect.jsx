import React, { useEffect, useState } from 'react';

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // মাউসের রিয়েল-টাইম পজিশন ট্র্যাকিং
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // সাইটের যেকোনো বাটন বা লিঙ্কে হুভার করলে কার্সার রিং রিঅ্যাক্ট করবে
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* ১. মূল কার্সার ডট (Core Pointer) */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-lime light:bg-brand-purple rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* ২. ম্যাগনেটিক জেলি রিং (Outer Halo Component) */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 ease-out border`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          // হুভার করলে রিংটি বড় হবে এবং ব্যাকগ্রাউন্ড নিওন গ্লো দিবে
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          borderColor: 'var(--cursor-color, #a3e635)',
          backgroundColor: isHovered ? 'var(--cursor-bg, rgba(163, 230, 21, 0.08))' : 'transparent',
          boxShadow: isHovered ? '0 0 15px var(--cursor-glow, rgba(163, 230, 21, 0.2))' : 'none',
        }}
      />
    </>
  );
}