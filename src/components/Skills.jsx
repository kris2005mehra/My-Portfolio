import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Wrench, Fingerprint, Activity, Terminal } from 'lucide-react';

const coreSkills = [
  { name: "React / MERN", level: 90 },
  { name: "AI/ML Integration", level: 85 },
  { name: "DSA / Architecture", level: 88 },
  { name: "Python & FastAPI", level: 80 }
];

const inventory = [
  {
    title: "Technical_Stack",
    icon: <Cpu size={18} />,
    items: ["HTML 5", "Typescript", "Tailwind CSS", "React", "Node.Js", "OpenCV", "REST APIs", "Vite", "MongoDB", "ExpressJs", "Git", "MySQL"]
  },
  {
    title: "Core_Languages",
    icon: <Code2 size={18} />,
    items: ["C", "Python", "C++", "Java", "JavaScript", "R"]
  },
  {
    title: "Dev_Environment",
    icon: <Wrench size={18} />,
    items: ["VS Code", "Google Cloud Platform", "Jupyter", "Github"]
  },
  {
    title: "Neural_Soft_Skills",
    icon: <Fingerprint size={18} />,
    items: ["Public Speaking", "Multitasking", "Team Leadership", "Academic Tutoring"]
  }
];

const SkillModule = ({ title, items, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    /* MODIFIED: Increased border opacity and background darkness for better contrast */
    className="relative p-6 border-2 border-cyan-400/40 bg-black/80 backdrop-blur-xl rounded-2xl group hover:border-cyan-400 transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
  >
    <div className="flex items-center gap-3 mb-4 text-cyan-300">
      <div className="p-2 bg-cyan-900/40 rounded-lg border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
        {icon}
      </div>
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-black group-hover:text-white transition-colors">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className="px-2 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-100 font-mono text-[10px] md:text-xs rounded hover:bg-cyan-400 hover:text-black hover:font-bold transition-all cursor-default shadow-sm">
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills-matrix" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-24 py-32 relative z-10 overflow-hidden">
      
      {/* Background Section Glows - Increased intensity */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-2"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
            <Activity size={16} className="animate-pulse" />
            <span>Subsystem_Analysis_Active</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono tracking-tighter uppercase">
            Skills_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">Matrix</span>
          </h2>
          <div className="w-48 h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_20px_cyan]"></div>
        </motion.div>

        {/* CORE MASTERY (Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-24">
          {coreSkills.map((skill, index) => (
            <div key={index} className="w-full group">
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-mono text-sm font-bold flex items-center gap-3 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_2px_black]">
                  <Terminal size={14} className="text-cyan-400" />
                  {skill.name}
                </span>
                <span className="text-cyan-400 font-mono text-sm font-black tracking-tighter drop-shadow-[0_0_5px_cyan]">{skill.level}%</span>
              </div>
              {/* Bar Container */}
              <div className="h-[10px] w-full bg-black rounded-full border border-cyan-400/30 overflow-hidden relative shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut", delay: index * 0.1 }}
                  /* MODIFIED: Brighter gradient and higher glow */
                  className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_20px_rgba(34,211,238,1)] relative"
                >
                  {/* Scanning pulse effect */}
                  <motion.div 
                    animate={{ left: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* INVENTORY GRID (Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inventory.map((module, idx) => (
            <SkillModule 
              key={idx}
              title={module.title}
              items={module.items}
              icon={module.icon}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}