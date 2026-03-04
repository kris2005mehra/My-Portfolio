import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, Linkedin, Github, ExternalLink, X, Terminal, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact-terminal" className="w-full min-h-screen flex flex-col items-center justify-center px-8 relative z-10 overflow-hidden">
      
      {/* BACKGROUND BRIGHTNESS SYNC */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-8 relative z-20"
      >
        {/* STATUS BADGE - Overclocked Glow */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-cyan-400 bg-cyan-950/50 text-cyan-300 font-mono text-sm mb-4 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping shadow-[0_0_10px_#fff]"></span>
          <span className="font-black tracking-[0.2em]">STATUS: OPEN_TO_OPPORTUNITIES</span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black text-white font-mono tracking-tighter">
          LET'S_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">BUILD</span>
        </h2>
        
        <p className="text-gray-200 max-w-xl mx-auto font-mono text-lg font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          Initialize secure uplink to start collaboration.
        </p>

        {/* INITIATE BUTTON - Matching Skill Bar Intensity */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative group px-16 py-5 bg-black border-2 border-cyan-400 font-mono text-cyan-400 text-xl font-black tracking-widest overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Terminal size={24} /> INITIATE_HANDSHAKE
          </span>
          {/* Sliding Gradient Fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          
        
        </button>
      </motion.div>

      {/* Fullscreen Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="relative w-full max-w-2xl bg-[#050510] border-2 border-cyan-400 p-8 md:p-12 shadow-[0_0_100px_rgba(34,211,238,0.3)] rounded-2xl overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_15px_cyan]" />

              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-cyan-400 hover:text-white hover:rotate-90 transition-all duration-300"
              >
                <X size={32} />
              </button>

              <div className="flex items-center gap-4 mb-10 border-b-2 border-cyan-900 pb-6">
                <ShieldCheck size={40} className="text-cyan-400 drop-shadow-[0_0_10px_cyan]" />
                <h3 className="text-3xl md:text-4xl font-mono font-black text-white uppercase tracking-tighter">
                  Secure_<span className="text-cyan-400">Handshake</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 relative z-10">
                {[
                  { icon: <Mail />, label: resumeData.contact.email, href: `mailto:${resumeData.contact.email}`, color: "cyan" },
                  { icon: <Linkedin />, label: "LinkedIn_Neural_Node", href: resumeData.contact.linkedin, color: "blue" },
                  { icon: <Github />, label: "GitHub_Source_Core", href: resumeData.contact.github, color: "white" },
                  { icon: <Terminal />, label: "Codolio_Performance", href: resumeData.contact.codolio, color: "cyan" }
                ].map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 text-gray-200 hover:text-white transition-all font-mono group p-5 border-2 border-cyan-900/50 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-900/40 rounded-xl"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <span className="text-sm md:text-lg font-black tracking-tight">{link.label}</span>
                    <ExternalLink size={18} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all translate-x-4 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-12 flex justify-between items-center font-mono text-[10px] text-cyan-800 font-black tracking-widest uppercase">
                <span>Protocol: AES-256_Enforced</span>
                <span className="animate-pulse">System.Connect(Active)</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}