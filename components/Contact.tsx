
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-xs font-bold tracking-[0.8em] text-[#F8B195] uppercase flex items-center justify-center gap-4">
              <Sparkles className="w-4 h-4" /> Next Step <Sparkles className="w-4 h-4" />
            </h2>
            <h3 className="text-5xl md:text-8xl font-black font-montserrat tracking-tighter text-[#EAEAEA]">
              Let's Create <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6C5B7B] via-[#F8B195] to-[#355C7D]">Pure Magic.</span>
            </h3>
          </div>

          <p className="text-[#B0B0B0] text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            I'm always open to new collaborations and high-end projects. My most active channel is Instagram — catch me there.
          </p>

          <div className="pt-12">
            <motion.a 
              href="https://instagram.com/zoya_asthetics_890" 
              target="_blank" 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 20px 60px rgba(108, 91, 123, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-6 bg-gradient-to-tr from-[#6C5B7B] to-[#355C7D] text-white px-16 py-8 rounded-[3rem] font-black tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl group"
            >
              <Instagram className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-sm md:text-lg">Follow @zoya_asthetics_890</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </motion.a>
          </div>

          <div className="pt-24 opacity-30 flex justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#B0B0B0] mb-2">Email</span>
              <a href="mailto:zoya.design@example.com" className="text-sm hover:text-[#F8B195] transition-colors">zoya.design@example.com</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme background bloom for emphasis */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[40rem] bg-gradient-to-tr from-[#6C5B7B]/10 to-[#F8B195]/10 rounded-full blur-[150px] pointer-events-none opacity-40"></div>
    </section>
  );
};

export default memo(Contact);
