import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ExternalLink, Github, Database, Cpu } from 'lucide-react';

const TiltCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      /* MODIFICATION: 
         - bg-black/40: More transparent to see the background animation.
         - backdrop-blur-md: Clearer shapes from the 3D background.
         - shadow-[0_0_30px_rgba(0,0,0,0.6)]: Darker drop shadow to float above background.
      */
      className="relative w-full h-auto bg-black/40 backdrop-blur-md border-[3px] border-cyan-500/50 p-1 flex flex-col rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background radial glow - increased opacity on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />

      <div className="z-10 flex flex-col h-full p-5">
        {/* Project Image Container */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full h-48 mb-6 overflow-hidden rounded-xl border-2 border-cyan-400/40 bg-slate-900 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          {/* Scanning Line Effect - Made more vivid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ top: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#00f2ff]"
            />
          </div>
        </div>

        <div style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Cpu size={14} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,1)]" />
            <h3 className="text-2xl font-black font-mono text-white tracking-tighter uppercase group-hover:text-cyan-300 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              {project.title}
            </h3>
          </div>
          
          {/* Text visibility protection: Added contrast against bright background animations */}
          <p className="text-gray-100 text-sm mb-6 leading-relaxed line-clamp-3 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,1)] bg-black/20 p-2 rounded">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-1 bg-cyan-950 border-2 border-cyan-500/60 text-cyan-200 rounded-md uppercase font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-auto border-t-2 border-cyan-400/30 pt-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-cyan-100 hover:text-white transition-colors uppercase tracking-[0.1em] font-black drop-shadow-[0_0_5px_rgba(0,0,0,1)] hover:drop-shadow-[0_0_8px_cyan]"
            >
              <Github size={16} className="text-cyan-400" /> Source_Code
            </a>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-cyan-100 hover:text-white transition-colors uppercase tracking-[0.1em] font-black drop-shadow-[0_0_5px_rgba(0,0,0,1)] hover:drop-shadow-[0_0_8px_cyan]"
            >
              <ExternalLink size={16} className="text-blue-400" /> Live_Deploy
            </a>
          </div>
        </div>
      </div>
      
      {/* Corner hardware accents - Solid and Glowing */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-cyan-400 z-20 shadow-[-2px_-2px_10px_rgba(34,211,238,0.5)]"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-cyan-400 z-20 shadow-[2px_2px_10px_rgba(34,211,238,0.5)]"></div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section 
      id="projects-section" 
      className="w-full min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 relative z-10"
    >
      {/* Background Overlay: Lighter than before (bg-black/10) to keep 3D background VISIBLE */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-2"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            <Database size={16} />
            <span>Project_Database_v3.0_Access_Granted</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white font-mono tracking-tighter">
            MY_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">WORKS</span>
          </h2>
          
          <div className="w-56 h-[5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_20px_cyan]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-[2000px]">
          {resumeData.projects.map((project, index) => (
            <TiltCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}