import React, { useState, useEffect, useRef, useCallback } from 'react';
import TechBackground from './components/TechBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Education from './components/Education';
import Cursor from './components/Cursor';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = [
    'About', 
    'Education', 
    'Projects', 
    'Experience', 
    'Skills', 
    'Achievements', 
    'Contact'
  ];

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) setActiveSection(index);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  const getSectionStyle = (index) => {
    const isActive = activeSection === index;
    const isPast = activeSection > index;

    return {
      opacity: isActive ? 1 : 0,
      filter: isActive ? 'blur(0px) brightness(1)' : 'blur(10px) brightness(0.6)',
      transform: isActive 
        ? 'scale(1) translateZ(0)' 
        : `scale(0.95) translateY(${isPast ? '-80px' : '80px'}) translateZ(-150px)`,
      transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      willChange: 'transform, opacity, filter',
    };
  };

  return (
    <div className="relative w-full h-screen bg-[#020205] overflow-hidden">
      
      {/* 1️⃣ Glitter Cursor */}
      <Cursor />

      {/* 2️⃣ Tech Background with Parallax */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-transform duration-[1.2s] ease-out"
        style={{ 
          transform: `translateY(${activeSection * -1.5}%) scale(${1 + activeSection * 0.01})`,
          willChange: 'transform'
        }}
      >
        <TechBackground />
      </div>

      {/* 3️⃣ Global Scanline Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none bg-scan-lines opacity-[0.05] mix-blend-overlay"></div>

      {/* 4️⃣ Main Scrolling Container */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full h-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
        style={{ perspective: '1500px', scrollBehavior: 'smooth' }}
      >
        {sections.map((name, index) => {
          const Component = [
            Hero,
            Education,
            Projects,
            Experience,
            Skills,
            Achievements,
            Contact
          ][index];

          return (
            <div 
              key={name}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full h-screen snap-start snap-always relative flex items-center justify-center overflow-hidden"
            >
              <div 
                className="w-full h-full flex items-center justify-center"
                style={getSectionStyle(index)}
              >
                {Component && <Component isActive={activeSection === index} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* 5️⃣ Enhanced Navigation Sidebar */}
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* 6️⃣ Cinematic Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]"></div>
      
      {/* 7️⃣ Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-40"></div>
    </div>
  );
}

export default App;