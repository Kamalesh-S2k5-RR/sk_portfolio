import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function LiquidBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // OpenAI Astra 6 Interactive Cursor Starfield Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Create Star Particles
    const particleCount = theme === 'dark' ? 160 : theme === 'liquid' ? 110 : 50;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speedAlpha: Math.random() * 0.015 + 0.005,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      hue: Math.random() > 0.65 ? (Math.random() > 0.5 ? 210 : 270) : 0,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        // Default floating drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Cursor Physics Repulsion & Attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.hypot(dx, dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            
            // Push stars gently away from cursor (Astra 6 particle fluid repulsion)
            p.x -= Math.cos(angle) * force * 3.5;
            p.y -= Math.sin(angle) * force * 3.5;

            // Draw glowing stardust connection vectors if super close
            if (distance < 90) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              const lineAlpha = (1 - distance / 90) * 0.35;
              ctx.strokeStyle = theme === 'dark'
                ? `rgba(0, 242, 254, ${lineAlpha})`
                : `rgba(0, 113, 227, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // Twinkle opacity
        p.alpha += p.speedAlpha;
        if (p.alpha >= 0.95 || p.alpha <= 0.15) {
          p.speedAlpha = -p.speedAlpha;
        }

        // Render Particle Star Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (theme === 'dark') {
          ctx.fillStyle = p.hue === 210
            ? `rgba(0, 242, 254, ${p.alpha})`
            : `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowBlur = p.radius > 1.2 ? 10 : 0;
          ctx.shadowColor = 'rgba(0, 242, 254, 0.8)';
        } else if (theme === 'liquid') {
          ctx.fillStyle = p.hue === 210
            ? `rgba(0, 113, 227, ${p.alpha * 0.7})`
            : `rgba(112, 0, 255, ${p.alpha * 0.6})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        } else {
          ctx.fillStyle = `rgba(100, 116, 139, ${p.alpha * 0.45})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* OpenAI Astra Starfield Canvas Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />

      {/* Theme 3: Apple Optical Liquid Crystal - Pastel Vibrant Fluid Mesh */}
      {theme === 'liquid' && (
        <div className="absolute inset-0 opacity-90 transition-opacity duration-700">
          <motion.div
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.25, 0.9, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-sky-300/60 via-blue-300/50 to-indigo-300/40 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 50, -50, 0],
              scale: [1, 0.85, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/4 -right-32 w-[700px] h-[700px] bg-gradient-to-bl from-purple-300/50 via-pink-300/40 to-rose-200/50 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 40, -50, 0],
              y: [0, 40, -30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/60 via-teal-200/50 to-blue-200/40 rounded-full blur-[110px]"
          />
        </div>
      )}

      {/* Theme 2: Dark Obsidian Astra Glow */}
      {theme === 'dark' && (
        <div className="absolute inset-0 opacity-80 transition-opacity duration-700">
          <motion.div
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-28 -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-teal-400/10 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 50, -50, 0],
              scale: [1, 0.85, 1.15, 1],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute top-1/3 -right-28 w-[650px] h-[650px] bg-gradient-to-bl from-purple-700/25 via-indigo-600/20 to-pink-500/15 rounded-full blur-[150px]"
          />
        </div>
      )}

      {/* Theme 1: Light Clean Soft Backdrop */}
      {theme === 'light' && (
        <div className="absolute inset-0 opacity-60 transition-opacity duration-700">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-purple-100/50 rounded-full blur-[120px]" />
        </div>
      )}
    </div>
  );
}
