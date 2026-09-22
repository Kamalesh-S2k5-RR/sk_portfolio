import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Layers, Sparkles, Filter, ShieldCheck, Cpu, Activity, Car, Bot } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 'net-immune-p2',
      title: "Net Immune Enterprise Edition (Phase 2)",
      year: "2026",
      category: "AI & Cybersecurity",
      icon: ShieldCheck,
      desc: "Extending Net Immune with enhanced threat intelligence, multi-agent consensus, and enterprise logging with a React dashboard.",
      fullDesc: "Currently building Phase 2 of Net Immune, an enterprise-grade AI threat intelligence suite. Features multi-agent coordination, real-time threat telemetry streaming, and a high-throughput React dashboard for visual attack graph inspection.",
      metrics: [
        { label: "Status", value: "Active Dev" },
        { label: "Interface", value: "React Dashboard" },
        { label: "Backend", value: "Python + Groq" },
      ],
      tags: ["Python", "Llama-3", "Groq API", "React.js", "Enterprise Logging"],
      features: [
        "Real-time visual attack graph stream in React",
        "Enhanced threat intelligence feeds & IOC matching",
        "Multi-agent asynchronous consensus protocol",
      ],
      github: "https://github.com/kamalesh-S2K5-RR",
    },
    {
      id: 'net-immune-p1',
      title: "Net Immune (Phase 1)",
      year: "2026",
      category: "AI & Cybersecurity",
      icon: ShieldCheck,
      desc: "Native Windows EDR tool using Llama-3 AI & 6 asynchronous agents for real-time monitoring and zero-shot malware classification.",
      fullDesc: "Developed a native Windows EDR application powered by Llama-3 and 6 async monitoring agents. Integrated Groq API for zero-shot threat classification, achieving sub-200ms inference per alert with 92% accuracy against common malware patterns in testing. Published in peer-reviewed journal IJSART.",
      metrics: [
        { label: "Inference Latency", value: "< 200ms" },
        { label: "Malware Accuracy", value: "92%" },
        { label: "Async Agents", value: "6 Engines" },
      ],
      tags: ["Python", "Llama-3", "Groq API", "GitHub", "Async Agents"],
      features: [
        "6 asynchronous monitoring engines for process & memory hooks",
        "Sub-200ms zero-shot malware classification",
        "Automated threat mitigation & endpoint isolation",
      ],
      publicationNote: "Published in International Journal of Research in Advanced Science and Engineering Technology (IJSART), Vol. 12, Issue 5, pp. 179-182, 2026.",
      pubLink: "https://github.com/kamalesh-S2K5-RR",
      github: "https://github.com/kamalesh-S2K5-RR",
    },
    {
      id: 'bluefactory',
      title: "BlueFactory Copilot",
      year: "2026",
      category: "Web & APIs",
      icon: Cpu,
      desc: "Dynamic AGV simulation with dynamic A* pathfinding, battery/heat physics modeling, and FastAPI REST APIs.",
      fullDesc: "Built an Automated Guided Vehicle (AGV) simulation engine. Implemented dynamic A* pathfinding algorithm, collision avoidance, and thermodynamic/battery drain physics. Developed REST APIs using FastAPI for seamless frontend-backend integration with a React.js control interface.",
      metrics: [
        { label: "Pathfinding", value: "Dynamic A*" },
        { label: "Physics", value: "Heat & Battery" },
        { label: "API Latency", value: "< 40ms" },
      ],
      tags: ["React.js", "FastAPI", "Python", "REST APIs", "A* Algorithm"],
      features: [
        "Real-time grid collision avoidance & path recalculation",
        "Battery drain and heat dissipation simulation physics",
        "FastAPI REST backend with interactive React control dashboard",
      ],
      github: "https://github.com/kamalesh-S2K5-RR",
    },
    {
      id: 'cardio-ai',
      title: "Cardio-AI",
      year: "2025",
      category: "Web & APIs",
      icon: Activity,
      desc: "Health forecast platform analyzing BMI, blood pressure, and heart rate with Firebase trend logging.",
      fullDesc: "Developed Cardio-AI, an intelligent heart health forecasting tool that analyzes patient inputs (BMI, BP, heart rate) to generate daily health recommendations. Integrated Firebase Auth for secure user profiles and historical trend logging.",
      metrics: [
        { label: "Auth", value: "Firebase Auth" },
        { label: "Logs", value: "Trend Analytics" },
      ],
      tags: ["React.js", "Node.js", "Firebase", "REST APIs"],
      features: [
        "Daily heart health forecasting algorithm based on vital statistics",
        "Firebase Auth integration for multi-user historical log tracking",
      ],
      github: "https://github.com/kamalesh-S2K5-RR",
    },
    {
      id: 'vehicle-rental',
      title: "Vehicle Rental System",
      year: "2025",
      category: "Web & APIs",
      icon: Car,
      desc: "Full-stack vehicle management platform featuring real-time booking and user database integration.",
      fullDesc: "Engineered a full-stack vehicle management web application. Features real-time vehicle availability booking, pricing calculators, and user database management built with React.js, Node.js, and Firebase.",
      metrics: [
        { label: "Platform", value: "Full-Stack" },
        { label: "Database", value: "Firebase" },
      ],
      tags: ["React.js", "Node.js", "Firebase", "Full-Stack"],
      features: [
        "Real-time booking reservation system and fleet database management",
        "Responsive glass UI for customer search and booking management",
      ],
      github: "https://github.com/kamalesh-S2K5-RR",
    },
    {
      id: 'line-robot',
      title: "Line Following Robot",
      year: "2024",
      category: "Robotics & Hardware",
      icon: Bot,
      desc: "Autonomous robot using IR sensor arrays for high-precision path tracking and motor control in C.",
      fullDesc: "Designed and programmed an autonomous hardware robot utilizing IR sensor arrays and motor drivers for high-precision path tracking. Developed embedded logic in C for real-time motor correction and sensor calibration.",
      metrics: [
        { label: "Language", value: "C" },
        { label: "Sensors", value: "IR Arrays" },
        { label: "Control", value: "Precision PWM" },
      ],
      tags: ["Arduino", "IR Sensors", "Motor Drivers", "C"],
      features: [
        "IR sensor array signal filtering and line deviation calculations",
        "Custom C motor driver control loops for high-speed stability",
      ],
      github: "https://github.com/kamalesh-S2K5-RR",
    },
  ];

  const categories = ['All', 'AI & Cybersecurity', 'Web & APIs', 'Robotics & Hardware'];

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan text-xs font-mono font-semibold"
        >
          / ARCHITECTED SYSTEMS
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary"
        >
          Featured Engineering & Research Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary max-w-2xl"
        >
          Explore my portfolio of multi-agent AI tools, pathfinding simulations, full-stack platforms, and embedded robotics.
        </motion.p>
      </section>

      {/* Category Filter Capsule Pills */}
      <section className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-liquid-accentBlue text-white border-liquid-accentBlue shadow-lg shadow-liquid-accentBlue/25'
                : 'liquid-glass border-white/70 dark:border-white/15 text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary hover:text-liquid-textLightPrimary hover:border-white/90'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const IconComponent = project.icon || Briefcase;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="liquid-card group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono opacity-60 text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary group-hover:text-liquid-accentBlue dark:group-hover:text-liquid-accentCyan transition-colors mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </h3>

                <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/50 dark:bg-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary border border-white/60 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono opacity-60 text-liquid-textLightSecondary">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/40 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-liquid-accentBlue dark:text-liquid-accentCyan">
                  <span>Inspect System Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}