import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Cpu, Terminal, Activity } from 'lucide-react';

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 relative z-10 overflow-hidden">
      
      {/* Background Section Glows - Matching Skills Matrix */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />

      <div className="max-w-5xl w-full mx-auto">
        
        {/* HEADER - Updated to match Skills Matrix brightness */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="mb-20 space-y-2"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <Activity size={16} className="animate-pulse" />
            <span>Deployment_History_Log</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono tracking-tighter uppercase">
            MY_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">EXPERIENCE</span>
          </h2>
          <div className="w-48 h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_20px_cyan]"></div>
        </motion.div>

        {/* TIMELINE - Brighter laser line */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-6 space-y-16">
          <div className="absolute left-[-2px] top-0 w-[3px] h-full bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.15 }} 
              className="relative pl-12 group"
            >
              {/* Pulsing Timeline Node - Overclocked Glow */}
              <div className="absolute -left-[14px] top-0 w-7 h-7 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,1)] z-20 group-hover:scale-125 transition-transform">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_12px_white]"></div>
              </div>

              {/* CARD - High Contrast Glassmorphism */}
              <div className="relative bg-black/80 backdrop-blur-xl border-2 border-cyan-500/40 p-8 rounded-2xl overflow-hidden group-hover:border-cyan-400 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                
                {/* Internal Card Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{exp.role}</h3>
                      <h4 className="text-lg text-cyan-400 font-mono font-black uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{exp.company}</h4>
                    </div>
                    {/* Date Badge - Solid High Vis */}
                    <div className="px-5 py-1.5 bg-cyan-950 border-2 border-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                      <span className="font-mono text-cyan-300 text-xs font-black tracking-widest">{exp.date}</span>
                    </div>
                  </div>

                  {exp.highlight && (
                    <div className="mt-6 p-5 bg-black/60 border-l-4 border-cyan-400 rounded-r-xl shadow-inner">
                      <div className="flex items-center gap-2 text-cyan-300 font-mono text-[10px] uppercase mb-2 font-bold drop-shadow-[0_0_5px_cyan]">
                        <Terminal size={14} />
                        <span>Executive_Summary_v1.0</span>
                      </div>
                      <p className="text-gray-100 text-base leading-relaxed italic font-medium drop-shadow-[0_1px_2px_black]">
                        "{exp.highlight}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Border Glow - The "Skill Bar" look */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Connecting Arm Glow */}
              <div className="absolute left-0 top-3 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}