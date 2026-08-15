import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start min-h-[80vh] px-8 md:px-20 lg:px-40 max-w-7xl mx-auto w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ambient-accent1/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-2 h-2 rounded-full bg-ambient-accent1 animate-pulse" />
        <span className="text-ambient-accent1 font-mono text-sm tracking-wider uppercase">Available for opportunities</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-ambient-text mb-4 tracking-tight"
      >
        KAMALESH S
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-4xl font-semibold text-ambient-accent3 mb-6 font-heading"
      >
        AI Builder · Hardware Surgeon · Research Engineer
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-[#a0a0b0] max-w-2xl leading-relaxed mb-10"
      >
        I build systems that think, move, and protect.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link 
          to="/projects"
          className="px-8 py-4 bg-transparent border border-ambient-accent1 text-ambient-accent1 font-mono text-lg rounded-none hover:bg-ambient-accent1/10 hover:shadow-glow transition-all duration-300"
        >
          Explore My Work
        </Link>
      </motion.div>
    </div>
  );
}