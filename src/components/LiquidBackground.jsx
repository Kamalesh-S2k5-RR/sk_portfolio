import { motion } from 'framer-motion';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light Mode Soft Prismatic Blobs */}
      <div className="dark:hidden absolute inset-0 opacity-70">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/40 to-cyan-200/50 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-200/40 via-purple-200/30 to-pink-200/40 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, 30, -40, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-20 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/40 via-teal-100/40 to-blue-200/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Dark Mode Deep Obsidian & Specular Iridescent Glow Blobs */}
      <div className="hidden dark:block absolute inset-0 opacity-80">
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
        <motion.div
          animate={{
            x: [0, 40, -50, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute -bottom-28 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-blue-700/20 to-emerald-500/15 rounded-full blur-[130px]"
        />
      </div>

      {/* Subtle Liquid Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />
    </div>
  );
}

