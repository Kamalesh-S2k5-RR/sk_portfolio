import { motion } from 'framer-motion';

const projects = [
  {
    title: "Net Immune",
    desc: "AI-powered EDR Tool for real-time endpoint threat neutralization.",
    tags: ["Python", "Llama-3", "Async Agents"],
  },
  {
    title: "BlueFactory Copilot",
    desc: "Dynamic AGV Simulation with A* pathfinding and physics.",
    tags: ["React.js", "FastAPI", "Python"],
  },
  {
    title: "Cardio-AI",
    desc: "Health Prediction system with daily forecasting and analysis.",
    tags: ["React.js", "Node.js", "Firebase"],
  },
  {
    title: "Vehicle Rental System",
    desc: "Full-Stack platform with real-time booking integrations.",
    tags: ["React.js", "Node.js", "Firebase"],
  },
  {
    title: "Line Following Robot",
    desc: "Autonomous robotics tracking with precision motor control.",
    tags: ["Arduino", "IR Sensors", "C"],
  }
];

export default function Projects() {
  return (
    <div className="py-20 px-8 md:px-20 lg:px-40 max-w-7xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-heading font-bold text-ambient-text mb-12"
      >
        <span className="text-ambient-accent1">/</span> Architected Systems
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-ambient-card p-6 border border-ambient-card hover:border-ambient-accent1/50 hover:shadow-glow transition-all duration-300 flex flex-col h-full group"
          >
            <h3 className="text-xl font-heading text-ambient-text mb-3 group-hover:text-ambient-accent1 transition-colors">
              {project.title}
            </h3>
            <p className="text-[#a0a0b0] text-sm mb-6 flex-grow">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-ambient-accent3">
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-left text-sm font-mono text-ambient-accent1 mt-auto flex items-center gap-2">
              View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}