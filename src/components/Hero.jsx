import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Terminal } from 'lucide-react';
import profileImg from '../assets/profile.png'; 

export default function Hero() {
  const words = useMemo(() => ["MERN Stack", "Open Source Contributor", "AI And ML Enthusiast", "DSA Learner"], []);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer;
    const currentWord = words[index];

    if (!isDeleting && text.length < currentWord.length) {
      timer = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 100);
    } else if (!isDeleting && text.length === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-10 overflow-hidden">
      {/* MODIFICATION: 
          - Changed bg-black/60 to bg-black/35 (More transparent)
          - Changed backdrop-blur-xl to backdrop-blur-md (Lets 3D shapes show through clearer)
          - Increased border-white/10 to border-cyan-500/30 (Brighter frame)
      */}
      <div className="relative z-20 w-full max-w-[94vw] lg:max-w-7xl min-h-[85vh] 
                      bg-black/35 backdrop-blur-md rounded-[40px] border-2 border-cyan-500/30 
                      p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 
                      overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        
        {/* MODIFICATION: Amplified the inner glow intensity */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex-1 space-y-6"
        >
          {/* MODIFICATION: Added text-shadow to make it pop against bright backgrounds */}
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs md:text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            <Terminal size={18} className="animate-pulse" />
            <span>Core_Interface_Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
            I am <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-500 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
              {resumeData.name}
            </span>
          </h1>
          
          <div className="h-12 md:h-16 text-2xl md:text-4xl font-mono font-bold text-cyan-50/100 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            {text}<span className="animate-pulse text-cyan-400">|</span>
          </div>

          <p className="max-w-md text-base md:text-lg text-gray-100 leading-relaxed border-l-4 border-cyan-400 pl-4 bg-black/20 py-2 rounded-r-lg shadow-sm">
            {resumeData.summary}
          </p>

          <div className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.8)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const projectSection = document.getElementById('projects-section');
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-sm uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-200">
                Initialize_Projects
              </span>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GO_TO_PROJECTS
              </span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            {/* MODIFICATION: More intense glow behind profile */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-[80px] animate-pulse" />

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-[-25px] rounded-full border-2 border-dashed border-cyan-400/50"
            />
            
            <div className="w-full h-full rounded-full border-[6px] border-cyan-400 overflow-hidden relative bg-black 
                            shadow-[0_0_60px_rgba(34,211,238,0.8),inset_0_0_30px_rgba(34,211,238,0.4)]">
               <img 
                 src={profileImg} 
                 alt="Profile" 
                 className="w-full h-full object-cover relative z-10 opacity-100 brightness-110"
                 onError={(e) => { e.target.style.display = 'none'; }}
               />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,1)] z-30" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODIFICATION: Increased opacity of indicator */}
      <div className="absolute bottom-6 z-10 flex flex-col items-center opacity-80 animate-bounce">
        <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent shadow-[0_0_10px_cyan]" />
      </div>
    </section>
  );
}