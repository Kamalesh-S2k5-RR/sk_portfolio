import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hover over interactive elements (buttons, links, cards)
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.liquid-card') ||
        target.closest('.liquid-glass')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden sm:block">
      {/* Zero-Latency Precision Micro Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isClicked ? 0.6 : isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 1400, mass: 0.005 }}
        className={`w-1.5 h-1.5 rounded-full fixed top-0 left-0 ${
          theme === 'dark'
            ? 'bg-cyan-400 shadow-[0_0_6px_rgba(0,242,254,0.9)]'
            : theme === 'liquid'
            ? 'bg-blue-600 shadow-[0_0_6px_rgba(0,113,227,0.7)]'
            : 'bg-slate-900 shadow-sm'
        }`}
      />

      {/* Zero-Latency Ultra-Delicate Optical Ring */}
      <motion.div
        animate={{
          x: mousePos.x - 11,
          y: mousePos.y - 11,
          scale: isClicked ? 0.6 : isHovered ? 1.25 : 1,
          opacity: isHovered ? 0.75 : 0.4,
        }}
        transition={{ type: 'spring', damping: 45, stiffness: 1000, mass: 0.01 }}
        className={`w-5 h-5 rounded-full fixed top-0 left-0 border backdrop-blur-[1px] ${
          theme === 'dark'
            ? 'border-cyan-400/40 bg-cyan-400/5'
            : theme === 'liquid'
            ? 'border-blue-600/40 bg-blue-600/5'
            : 'border-slate-800/30 bg-slate-800/5'
        }`}
      />
    </div>
  );
}
