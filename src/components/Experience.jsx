import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, Activity } from 'lucide-react';

const ExperienceCard = ({ exp }) => {
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
      className="relative w-full h-full bg-black/40 backdrop-blur-md border-[3px] border-cyan-500/50 p-1 flex flex-col rounded-2xl overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />

      <div className="z-10 flex flex-col h-full p-5">
        {/* Company Logo Container */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full h-48 mb-6 overflow-hidden rounded-xl border-2 border-cyan-400/40 bg-white flex items-center justify-center p-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <img 
            src={exp.image} 
            alt={exp.company}
            className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ top: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#00f2ff]"
            />
          </div>

          {/* Location Badge on Image */}
          {exp.location && (
            <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-black/80 border border-cyan-400/60 rounded-md text-[10px] font-mono text-cyan-300 font-bold flex items-center gap-1">
              <MapPin size={10} /> {exp.location}
            </div>
          )}
        </div>

        <div style={{ transform: "translateZ(50px)" }} className="flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase size={16} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,1)] flex-shrink-0" />
            <h3 className="text-2xl font-black font-mono text-white tracking-tighter uppercase group-hover:text-cyan-300 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,1)] line-clamp-1">
              {exp.role}
            </h3>
          </div>

          <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-wider mb-3">
            {exp.company}
          </h4>

          {/* Date Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-cyan-950 border border-cyan-400/60 rounded-full text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5 shadow-[0_0_8px_rgba(34,211,238,0.2)]">
              <Calendar size={12} className="text-cyan-400" />
              {exp.date}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-100 text-xs mb-3 leading-relaxed font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,1)] bg-black/30 p-2.5 rounded-lg border border-white/5">
            {exp.description}
          </p>

          {/* Highlight */}
          {exp.highlight && (
            <p className="text-cyan-200 text-[11px] mb-4 leading-relaxed font-mono italic border-l-2 border-cyan-400 pl-2 bg-black/20 py-1 rounded-r">
              "{exp.highlight}"
            </p>
          )}

          {/* Tech Badges */}
          {exp.tech && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t-2 border-cyan-400/30">
              {exp.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 border border-cyan-500/60 text-cyan-200 rounded uppercase font-bold shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Corner hardware accents */}
      <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-cyan-400 z-20 shadow-[-2px_-2px_10px_rgba(34,211,238,0.5)]"></div>
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-cyan-400 z-20 shadow-[2px_2px_10px_rgba(34,211,238,0.5)]"></div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section 
      id="experience-section"
      className="w-full min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 relative z-10"
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="mb-16 space-y-2"
        >
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            <Activity size={16} className="animate-pulse" />
            <span>Deployment_History_Log_Loaded</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white font-mono tracking-tighter uppercase">
            MY_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">EXPERIENCE</span>
          </h2>
          <div className="w-56 h-[5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_20px_cyan]"></div>
        </motion.div>

        {/* 3 Uniform Cards matching Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-[2000px]">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
