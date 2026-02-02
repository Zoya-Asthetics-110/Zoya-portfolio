
import React, { memo } from 'react';
import { Palette, Code, Layout, Smartphone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const IconMap: any = {
  Palette: Palette,
  Code: Code,
  Layout: Layout,
  Smartphone: Smartphone,
  FileText: FileText
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.5em] text-[#6C5B7B] uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black font-montserrat">Premium Services</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-10 rounded-[2rem] group transition-all duration-500 hover:bg-[#2A2A2A] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b-2 border-transparent hover:border-[#6C5B7B]"
              >
                <div className="mb-6 p-4 rounded-2xl bg-[#1C1C1C] w-fit group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-[#F8B195]" />
                </div>
                <h4 className="text-2xl font-bold mb-4 font-montserrat">{service.title}</h4>
                <p className="text-[#B0B0B0] font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
