
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import FloatingTools from './FloatingTools';

const Hero: React.FC = () => {
  const name = "ZOYA";
  // Added 'as const' to the ease array to fix TypeScript inference from number[] to [number, number, number, number]
  const charVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="text-center z-10 perspective-container">
        <div className="flex justify-center overflow-hidden">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              className="text-[20vw] md:text-[15vw] font-black leading-none font-montserrat tracking-tighter select-none text-[#EAEAEA] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-xs md:text-xl text-[#B0B0B0] uppercase font-light tracking-[0.4em]"
        >
          Graphic Designer & Web Developer
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-12"
        >
          <motion.a 
            href="https://instagram.com/zoya_asthetics_890" 
            target="_blank"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 40px rgba(248,177,149,0.3)",
              backgroundColor: "rgba(248, 177, 149, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-5 glass text-[#EAEAEA] font-bold rounded-full transition-all duration-500 block w-fit mx-auto overflow-hidden border border-white/10"
          >
            <span className="relative z-10 tracking-[0.2em] text-xs md:text-sm uppercase">@zoya_asthetics_890</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C5B7B] to-[#F8B195] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="w-full max-w-5xl"
      >
        <FloatingTools />
      </motion.div>

      <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] tracking-[0.4em] uppercase font-light text-[#B0B0B0]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F8B195] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default memo(Hero);
