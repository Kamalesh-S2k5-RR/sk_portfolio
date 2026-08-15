import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="py-20 px-8 md:px-20 lg:px-40 max-w-7xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-heading font-bold text-ambient-text mb-12"
      >
        <span className="text-ambient-accent1">/</span> Let's Connect
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-ambient-text font-mono text-sm">Name</label>
              <input type="text" className="bg-ambient-card border border-ambient-card focus:border-ambient-accent1 outline-none px-4 py-3 text-ambient-text transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-ambient-text font-mono text-sm">Email</label>
              <input type="email" className="bg-ambient-card border border-ambient-card focus:border-ambient-accent1 outline-none px-4 py-3 text-ambient-text transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-ambient-text font-mono text-sm">Message</label>
              <textarea rows="5" className="bg-ambient-card border border-ambient-card focus:border-ambient-accent1 outline-none px-4 py-3 text-ambient-text transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="px-8 py-4 bg-ambient-accent1 text-ambient-bg font-bold font-mono hover:bg-ambient-accent1/80 transition-colors mt-2">
              Transmit Message
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-heading text-ambient-text mb-4">Transmission Channels</h3>
            <p className="text-[#a0a0b0] mb-6">
              My inbox is always open. Whether you have a question, a project idea, or just want to discuss the future of AI and hardware, I'll try my best to get back to you.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-mono">
            <a href="mailto:kamaleshs@email.com" className="text-ambient-text hover:text-ambient-accent2 transition-colors flex items-center gap-4">
              <span className="text-ambient-accent1">Email:</span> kamaleshs@email.com
            </a>
            <a href="https://linkedin.com/in/kamalesh-s-2k5" target="_blank" rel="noreferrer" className="text-ambient-text hover:text-ambient-accent2 transition-colors flex items-center gap-4">
              <span className="text-ambient-accent1">LinkedIn:</span> /kamalesh-s-2k5
            </a>
            <a href="https://github.com/kamalesh2705" target="_blank" rel="noreferrer" className="text-ambient-text hover:text-ambient-accent2 transition-colors flex items-center gap-4">
              <span className="text-ambient-accent1">GitHub:</span> /kamalesh2705
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}