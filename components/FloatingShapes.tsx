
import React, { useState, useEffect, startTransition } from 'react';

interface FloatingShapesProps {
  scrollY: number;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      startTransition(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5),
          y: (e.clientY / window.innerHeight - 0.5)
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Parallax Layer 1 (Slow) */}
      <div 
        className="absolute top-[10%] left-[10%] w-64 h-64 border border-[#6C5B7B] rounded-full opacity-20 transition-transform duration-1000 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20 + scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)` 
        }}
      ></div>
      
      {/* Parallax Layer 2 (Medium) */}
      <div 
        className="absolute top-[40%] right-[5%] w-48 h-48 border border-[#355C7D] rounded-3xl opacity-10 transition-transform duration-700 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40 + scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)` 
        }}
      ></div>

      {/* Parallax Layer 3 (Fast) */}
      <div 
        className="absolute bottom-[20%] left-[15%] w-80 h-80 border-2 border-[#F8B195] rounded-full opacity-5 transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60 + scrollY * 0.1}px)` 
        }}
      ></div>

      {/* Floating Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#EAEAEA 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background Blobs */}
      <div 
        className="absolute top-[70%] right-[20%] w-[40rem] h-[40rem] bg-[#6C5B7B]/10 rounded-full blur-[120px] opacity-10 transition-transform duration-[2s] ease-out"
        style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30 + scrollY * -0.05}px)` }}
      ></div>
    </div>
  );
};

export default FloatingShapes;
