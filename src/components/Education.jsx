import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, Terminal, ShieldCheck, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Business Systems",
      inst: "Narula Institute of Technology",
      loc: "West Bengal, India",
      grade: "8.25",
      date: "2021 — 2027 (Expected)",
      status: "CURRENT_PHASE"
    },
    {
      degree: "Indian School Certificate (ISC)",
      inst: "Seventh Day Adventist Senior Secondary School",
      loc: "West Bengal, India",
      grade: "8.0",
      date: "2021 — 2023",
      status: "COMPLETED"
    },
    {
      degree: "Indian Certificate of Secondary Education (ICSE)",
      inst: "Seventh Day Adventist Senior Secondary School",
      loc: "West Bengal, India",
      grade: "10.0",
      date: "2019 — 2021",
      status: "COMPLETED"
    }
  ];

  return (
    <section id="education-log" className="w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 relative z-10 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />

      <div className="max-w-5xl w-full mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-2"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <Activity size={16} className="animate-pulse" />
            <span>Academic_Architecture_Loaded</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-mono tracking-tighter uppercase">
            EDU<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">CATION</span>
          </h2>
          <div className="w-40 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_15px_cyan]"></div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-6 space-y-12">
          <div className="absolute left-[-2px] top-0 w-[3px] h-full bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.6)]" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 group"
            >
              {/* Node */}
              <div className="absolute -left-[12px] top-0 w-6 h-6 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
              </div>

              {/* CARD */}
              <div className="relative bg-black/80 backdrop-blur-xl border-2 border-cyan-500/40 p-6 rounded-2xl overflow-hidden group-hover:border-cyan-400 transition-all duration-400 shadow-[0_0_12px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] uppercase font-black tracking-widest opacity-80">
                      <Terminal size={12} /> {edu.status}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                    <h4 className="text-lg text-cyan-400 font-mono font-black uppercase tracking-tighter">{edu.inst}</h4>
                    <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                      <MapPin size={12} /> {edu.loc}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-3 min-w-fit">
                    <div className="px-4 py-1.5 bg-cyan-950 border-2 border-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                      <span className="font-mono text-cyan-300 text-xs font-black tracking-widest">{edu.date}</span>
                    </div>
                    
                    <div className="text-right">
                      <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">Score_Metric</span>
                      <span className="text-3xl font-black text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                        {edu.grade}<span className="text-sm text-cyan-500">/10</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_12px_rgba(34,211,238,0.8)] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}