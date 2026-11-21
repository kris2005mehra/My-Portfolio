import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Wrench, Fingerprint, Activity, Brain, Sparkles } from 'lucide-react';

const inventory = [
  {
    title: "AI_&_Generative_AI",
    icon: <Brain size={20} />,
    items: [
      "Generative AI (GenAI)",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)"
    ]
  },
  {
    title: "AI_Tools_&_Dev",
    icon: <Sparkles size={20} />,
    items: [
      "Claude",
      "OpenAI Codex",
      "Google Antigravity"
    ]
  },
  {
    title: "Technical_Stack",
    icon: <Cpu size={20} />,
    items: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "HTML 5",
      "Vite",
      "REST APIs",
      "OpenCV",
      "Git",
      "MySQL"
    ]
  },
  {
    title: "Core_Languages",
    icon: <Code2 size={20} />,
    items: [
      "Python",
      "JavaScript",
      "C++",
      "C",
      "Java",
      "R"
    ]
  },
  {
    title: "Dev_Environment",
    icon: <Wrench size={20} />,
    items: [
      "VS Code",
      "Google Cloud Platform",
      "GitHub",
      "Jupyter"
    ]
  },
  {
    title: "Neural_Soft_Skills",
    icon: <Fingerprint size={20} />,
    items: [
      "Public Speaking",
      "Multitasking",
      "Team Leadership",
      "Academic Tutoring"
    ]
  }
];

const SkillModule = ({ title, items, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative p-6 border-2 border-cyan-400/50 bg-black/75 backdrop-blur-xl rounded-2xl group hover:border-cyan-400 transition-all duration-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center gap-3 mb-5 text-cyan-300">
        <div className="p-2.5 bg-cyan-900/40 rounded-xl border border-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="font-mono text-sm uppercase tracking-[0.2em] font-black text-white group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/60 text-cyan-100 font-mono text-xs rounded-lg hover:bg-cyan-400 hover:text-black hover:font-bold transition-all cursor-default shadow-[0_0_8px_rgba(34,211,238,0.1)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Bottom subtle accent line */}
    <div className="mt-6 pt-2 border-t border-cyan-500/20 flex justify-between items-center text-[10px] font-mono text-cyan-400/60">
      <span>SEC_ID // 0{delay * 10 + 1}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills-matrix" className="w-full min-h-screen flex flex-col justify-center px-6 md:px-24 py-28 relative z-10 overflow-hidden">
      
      {/* Background Section Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14 space-y-2"
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

        {/* INVENTORY GRID - Clear 6 cards layout, no rating bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
