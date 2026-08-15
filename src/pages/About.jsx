import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    "Python", "Java", "SQL", "React.js", "FastAPI", "Node.js", 
    "Llama-3", "Groq API", "RAG", "MongoDB", "Firebase", 
    "Arduino", "Docker", "Kali Linux"
  ];

  return (
    <div className="py-20 px-8 md:px-20 lg:px-40 max-w-7xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-heading font-bold text-ambient-text mb-12"
      >
        <span className="text-ambient-accent1">/</span> About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-lg text-[#a0a0b0] leading-relaxed mb-6">
            I'm a Computer Science graduate who started by fixing hardware, then fell in love with building software, and now combines both with AI research.
          </p>
          <p className="text-lg text-[#a0a0b0] leading-relaxed mb-6">
            I don't just write code — I build systems that think, move, and protect. My curiosity drives me to explore everything from robotics to cybersecurity, and I believe the best solutions come from understanding the full stack — from silicon to sentience.
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-heading text-ambient-text mb-6">The Journey</h3>
            <div className="flex flex-col gap-4 border-l-2 border-ambient-card pl-6">
              <div>
                <span className="text-ambient-accent2 font-mono text-sm">Phase 1</span>
                <p className="text-ambient-text">Hardware Repair & Robotics</p>
              </div>
              <div>
                <span className="text-ambient-accent1 font-mono text-sm">Phase 2</span>
                <p className="text-ambient-text">Full-Stack Development</p>
              </div>
              <div>
                <span className="text-ambient-accent3 font-mono text-sm">Phase 3</span>
                <p className="text-ambient-text">AI Research & Threat Defense</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <h3 className="text-2xl font-heading text-ambient-text mb-6">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-ambient-card border border-ambient-card text-ambient-text text-sm rounded-sm hover:border-ambient-accent1 hover:text-ambient-accent1 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-heading text-ambient-text mb-6">Certifications</h3>
          <ul className="text-[#a0a0b0] space-y-2 mb-10 list-disc list-inside">
            <li>Artificial Intelligence - IBM SkillsBuild</li>
            <li>Cybersecurity Fundamental - IBM SkillsBuild</li>
            <li>Python Basics - Infosys Springboard</li>
            <li>Data Analytics - Cloud Skills Boost</li>
          </ul>

          <button className="px-6 py-3 bg-ambient-accent1/10 border border-ambient-accent1 text-ambient-accent1 hover:bg-ambient-accent1 hover:text-ambient-bg transition-colors duration-300 font-mono">
            Download Resume (PDF)
          </button>
        </motion.div>
      </div>
    </div>
  );
}