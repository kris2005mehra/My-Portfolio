import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-cyan-400/60 shadow-[0_0_15px_cyan] mix-blend-screen z-50"
    />
  );
}