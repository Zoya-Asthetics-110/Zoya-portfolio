
import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Added 'as const' to the ease array to ensure correct typing for Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.15, 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] as const
    },
  }),
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div className="flex flex-col items-start">
            <motion.h2 
              variants={fadeUp} 
              custom={1}
              className="text-xs font-bold tracking-[0.5em] text-[#F8B195] uppercase mb-6"
            >
              The Visionary
            </motion.h2>
            
            <motion.h3 
              variants={fadeUp} 
              custom={2}
              className="text-5xl md:text-8xl font-black font-montserrat leading-[1.1] tracking-tighter"
            >
              Mastering the Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5B7B] to-[#F8B195] italic">Digital Elegance.</span>
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 text-[#B0B0B0] items-start">
            <motion.div variants={fadeUp} custom={3} className="space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#EAEAEA]">
                I am Zoya, a multi-disciplinary designer dedicated to crafting luxury digital experiences that redefine interaction.
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed">
                My work is a blend of cinematic visual storytelling and robust technical engineering. I don't just build sites; I create worlds.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} custom={4} className="space-y-6 pt-0 md:pt-12">
              <p className="text-base md:text-lg font-light leading-relaxed">
                With a deep background in both graphic arts and full-stack development, I offer a unique perspective where aesthetics and functionality are inseparable.
              </p>
              <div className="pt-8">
                <div className="glass p-8 rounded-[2rem] border-l-4 border-[#F8B195] hover:bg-white/5 transition-all duration-500 group shadow-2xl">
                  <p className="text-sm font-bold tracking-widest text-[#F8B195] uppercase mb-2">Philosophy</p>
                  <p className="text-lg md:text-xl italic font-light text-[#EAEAEA] group-hover:pl-2 transition-all duration-500">
                    "Every pixel should breathe, and every interaction should inspire."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);
