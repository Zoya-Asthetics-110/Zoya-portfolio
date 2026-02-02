
import React, { memo } from 'react';
import { motion } from 'framer-motion';

const FloatingTools: React.FC = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] mt-10">
      {/* Decorative interactive shapes kept for cinematic feel without the specific logos */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-[#F8B195]/10 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border border-[#6C5B7B]/5 rounded-full pointer-events-none"
      />
    </div>
  );
};

export default memo(FloatingTools);
