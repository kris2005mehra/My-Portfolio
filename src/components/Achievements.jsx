import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Award, Target, Zap } from 'lucide-react';

const AnimatedCounter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
};

export default function Achievements() {
  return (
    <section id="milestones-log" className="w-full min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 relative z-10 overflow-hidden">
      
      {/* Background Section Glows - Matching Skills/Experience Intensity */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* HEADER - Updated for High Visibility */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-2 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <Zap size={16} className="animate-pulse" />
            <span>Achievement_Metrics_Synchronized</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono tracking-tighter uppercase">
            MIL<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">ESTONES</span>
          </h2>
          
          <div className="w-48 h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_20px_cyan] mx-auto md:mx-0"></div>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {resumeData.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              /* CARD: Stronger border, darker glass, and intense shadow */
              className="relative p-10 bg-black/80 backdrop-blur-xl border-2 border-cyan-500/40 rounded-2xl text-center group overflow-hidden transition-all duration-500 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Internal Spotlight Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Scanline hover effect (Brighter) */}
              <div className="absolute inset-0 bg-scan-lines opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex justify-center mb-6">
                <div className="p-4 bg-cyan-900/30 rounded-full border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all">
                  <Award size={48} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="relative z-10 text-7xl font-black font-mono text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:text-cyan-300 transition-colors">
                <AnimatedCounter value={ach.number} />
                <span className="text-cyan-400">+</span>
              </div>
              
              <p className="relative z-10 text-gray-100 font-mono text-xs md:text-sm h-16 flex items-center justify-center uppercase tracking-widest font-bold drop-shadow-[0_1px_2px_black]">
                {ach.text}
              </p>
              
              {/* THE BRIGHTNESS STRIP: Matching the Skill Bars / Experience Glow */}
              <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_20px_rgba(34,211,238,1)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Hardware Accents */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_cyan]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}