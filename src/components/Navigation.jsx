import React from 'react';
import { motion } from 'framer-motion';

export default function Navigation({ sections, activeSection, onNavigate }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => onNavigate(index)}
          className="group flex items-center justify-end relative w-12 h-6"
          aria-label={`Go to ${section}`}
        >
          {/* Label tooltip */}
          <span className={`
            absolute right-10 px-2 py-1 rounded bg-blue-deep/80 border border-cyan-dark
            text-xs font-mono text-cyan-neon whitespace-nowrap
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${activeSection === index ? 'opacity-100' : ''}
          `}>
            {section}
          </span>
          
          {/* Dot */}
          <div className="relative flex items-center justify-center w-4 h-4">
            {activeSection === index && (
              <motion.div 
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-cyan-neon box-glow"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className={`
              w-2 h-2 rounded-full transition-colors duration-300
              ${activeSection === index ? 'bg-white' : 'bg-gray-600 group-hover:bg-cyan-dark'}
            `} />
          </div>
        </button>
      ))}
    </div>
  );
}