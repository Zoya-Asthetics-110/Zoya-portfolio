
import React, { useState, useEffect, startTransition, memo } from 'react';
import { motion } from 'framer-motion';
import { TOOLS } from '../constants';

const ToolsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      startTransition(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 60,
          y: (e.clientY / window.innerHeight - 0.5) * 60
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHover = (name: string | null) => {
    startTransition(() => {
      setHovered(name);
    });
  };

  return (
    <section className="py-40 px-6 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-32"
        >
          <h2 className="text-xs font-bold tracking-[0.6em] text-[#F8B195] uppercase mb-6">Expert Kit</h2>
          <h3 className="text-5xl md:text-7xl font-black font-montserrat tracking-tighter">Digital Arsenal</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16">
          {TOOLS.map((tool, index) => (
            <motion.div 
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center group perspective-container"
              onMouseEnter={() => handleHover(tool.name)}
              onMouseLeave={() => handleHover(null)}
            >
              <div 
                className="w-32 h-32 md:w-40 md:h-40 glass rounded-[3rem] flex items-center justify-center transition-all duration-700 preserve-3d relative"
                style={{ 
                  transform: hovered === tool.name 
                    ? `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 60px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)` 
                    : 'translate3d(0, 0, 0)',
                  boxShadow: hovered === tool.name ? `0 40px 80px ${tool.color}22` : 'none',
                  borderColor: hovered === tool.name ? tool.color : 'rgba(255,255,255,0.05)',
                  background: hovered === tool.name ? 'rgba(255, 255, 255, 0.05)' : 'rgba(42, 42, 42, 0.4)'
                }}
              >
                {/* Floating tool icon */}
                <span 
                  className="text-4xl md:text-5xl font-black font-montserrat select-none transition-all duration-500"
                  style={{ 
                    color: tool.color, 
                    textShadow: hovered === tool.name ? `0 0 25px ${tool.color}88` : 'none',
                    transform: hovered === tool.name ? 'translateZ(30px) scale(1.1)' : 'translateZ(0px)'
                  }}
                >
                  {tool.icon}
                </span>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                  style={{ backgroundColor: tool.color }}
                ></div>
              </div>
              <p className="mt-10 text-[10px] font-black tracking-[0.4em] text-[#B0B0B0] group-hover:text-[#F8B195] transition-all duration-500 uppercase">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#6C5B7B] rounded-full blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#355C7D] rounded-full blur-[200px] opacity-10 pointer-events-none translate-x-1/2"></div>
    </section>
  );
};

export default memo(ToolsSection);
