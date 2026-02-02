
import React, { useState, useEffect, startTransition, useDeferredValue } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import ToolsSection from './components/ToolsSection';
import Contact from './components/Contact';
import FloatingShapes from './components/FloatingShapes';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  // useDeferredValue allows the background shapes to lag slightly behind the scroll,
  // preventing React from trying to update everything synchronously and causing Error #525.
  const deferredScrollY = useDeferredValue(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Layers */}
      <div className="fixed inset-0 -z-10 bg-[#1C1C1C] overflow-hidden">
        <FloatingShapes scrollY={deferredScrollY} />
        {/* Cinematic Blooms */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#6C5B7B] rounded-full blur-[180px] opacity-10"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#355C7D] rounded-full blur-[180px] opacity-10"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <ToolsSection />
        <Contact />
      </main>

      <footer className="py-12 px-6 glass mt-20 text-center text-[#B0B0B0]">
        <p>&copy; {new Date().getFullYear()} Zoya Aesthetics. All rights reserved.</p>
        <p className="mt-2 text-sm tracking-[0.2em] font-light">ELEGANCE BY DESIGN</p>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
