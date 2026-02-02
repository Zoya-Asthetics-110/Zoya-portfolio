
import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24"
        >
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.6em] text-[#355C7D] uppercase">Selected Archive</h2>
            <h3 className="text-5xl md:text-7xl font-black font-montserrat tracking-tighter">Iconic Work</h3>
          </div>
          <button className="mt-8 md:mt-0 text-[#B0B0B0] hover:text-[#F8B195] transition-all duration-500 border-b border-white/10 pb-2 tracking-[0.3em] text-[10px] uppercase font-bold group">
            Explore All <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ml-2">→</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] md:aspect-[16/11]">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-black tracking-[0.3em] uppercase text-[#F8B195] backdrop-blur-md">
                      {project.category}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-black font-montserrat tracking-tighter text-[#EAEAEA]">
                      {project.title}
                    </h4>
                  </motion.div>
                </div>

                {/* Hover Reveal Details */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-4 glass rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#1C1C1C]/95 backdrop-blur-3xl"
            onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative glass max-w-6xl w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-20 p-3 rounded-full glass hover:bg-[#F8B195] hover:text-[#1C1C1C] transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center bg-[#2A2A2A]/20">
                  <span className="text-[#F8B195] text-xs font-bold tracking-[0.4em] uppercase mb-6">
                    {selectedProject.category}
                  </span>
                  <h4 className="text-4xl md:text-6xl font-black font-montserrat mb-8 tracking-tighter text-[#EAEAEA]">
                    {selectedProject.title}
                  </h4>
                  <p className="text-[#B0B0B0] text-lg leading-relaxed mb-12 font-light">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-4 bg-gradient-to-r from-[#6C5B7B] to-[#355C7D] text-white font-black tracking-widest text-xs uppercase rounded-full shadow-lg"
                    >
                      View Live Case Study
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(Work);
