import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, BookOpen, Terminal, ArrowRight, Sparkles, CheckCircle2, Zap, Activity } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('netimmune');
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { label: 'Threat Inference Speed', value: 'sub-200ms', desc: 'Zero-shot AI Classification via Groq API' },
    { label: 'Autonomous Agents', value: '6 Async Agents', desc: 'Native Real-Time System Monitoring' },
    { label: 'Malware Accuracy', value: '92%', desc: 'Tested against common endpoint malware' },
    { label: 'Peer-Reviewed Research', value: 'IJSART 2026', desc: 'Published AI Threat Neutralization Paper' },
  ];

  const terminalLogs = {
    netimmune: [
      { text: '[INIT] Net Immune Autonomous EDR Engine v2.0...', color: 'text-blue-600 dark:text-cyan-400 font-bold' },
      { text: '[AGENT 1..6] Bootstrapping Windows endpoint monitors & thread hooks...', color: 'opacity-80' },
      { text: '[GROQ API] Groq Llama-3 70B zero-shot classifier connected. Latency: 184ms.', color: 'text-emerald-600 dark:text-emerald-400' },
      { text: '[ALERT] Suspicious process hierarchy detected in winlogon memory space.', color: 'text-amber-500 font-semibold' },
      { text: '[ACTION] Multi-agent consensus reached: Threat neutralized automatically.', color: 'text-emerald-600 dark:text-emerald-400 font-bold' },
    ],
    agv: [
      { text: '[AGV] BlueFactory Copilot pathfinding simulator initialized.', color: 'text-purple-600 dark:text-purple-400 font-bold' },
      { text: '[GRAPH] Loading warehouse grid map (200x200 node mesh)...', color: 'opacity-80' },
      { text: '[A* ALGORITHM] Optimal path computed: 42 steps, 0.04s execution.', color: 'text-blue-600 dark:text-cyan-400' },
      { text: '[PHYSICS] Battery drain model: 98.4% nominal. Heat dissipation stable.', color: 'text-emerald-600 dark:text-emerald-400' },
      { text: '[REST API] FastAPI endpoint synchronized with React.js frontend interface.', color: 'opacity-90' },
    ],
    sysinfo: [
      { text: 'USER: Kamalesh S', color: 'text-blue-600 dark:text-cyan-400 font-bold' },
      { text: 'DEGREE: B.E. Computer Science & Engineering (7.5 CGPA)', color: 'opacity-90' },
      { text: 'COLLEGE: Kingston Engineering College, Katpadi (2022 - 2026)', color: 'opacity-90' },
      { text: 'CAREER STATUS: Excited to start career at Texawave', color: 'text-amber-500 font-semibold' },
      { text: 'PRIMARY STACK: Python, FastAPI, React.js, Llama-3, Node.js, C, Firebase', color: 'text-purple-600 dark:text-purple-300' },
    ]
  };

  const featuredNetImmune = {
    title: "Net Immune (Phase 1 & Enterprise Phase 2)",
    year: "2026",
    category: "AI & Endpoint Cybersecurity",
    desc: "Autonomous Multi-Agent AI system for real-time endpoint threat detection, zero-shot malware classification, and instant threat neutralization.",
    fullDesc: "Net Immune is an advanced Windows EDR tool powered by Llama-3 and 6 asynchronous autonomous agents. It continuously monitors process behavior, memory hooks, and file system anomalies. Integrated with Llama-3 via Groq API, it achieves sub-200ms threat inference with 92% accuracy. Currently extending Phase 2 with enterprise-grade logging and a React-based threat visualization dashboard.",
    metrics: [
      { label: "Inference Latency", value: "< 200ms" },
      { label: "Classification Accuracy", value: "92%" },
      { label: "Async Agents", value: "6 Engines" },
    ],
    tags: ["Python", "Llama-3", "Groq API", "Async Agents", "React.js", "FastAPI"],
    features: [
      "Zero-shot threat classification via Llama-3 LLM",
      "Native Windows process & memory monitoring hooks",
      "Sub-200ms real-time inference latency per security alert",
      "Enterprise React dashboard for live attack visualization",
    ],
    publicationNote: "Published in International Journal of Research in Advanced Science and Engineering Technology (IJSART), Vol. 12, Issue 5, pp. 179-182, 2026.",
    pubLink: "https://github.com/kamalesh-S2K5-RR",
    github: "https://github.com/kamalesh-S2K5-RR",
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start space-y-6 sm:space-y-8 pt-4">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full liquid-glass text-xs font-semibold shadow-md cursor-default"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            AI & Systems Software Engineer · Excited for Texawave Journey
          </span>
        </motion.div>

        {/* Hero Headline */}
        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Building software that <br className="hidden sm:inline" />
            <span className="liquid-text-gradient">thinks, protects, & moves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-2xl font-normal opacity-85 leading-relaxed max-w-3xl"
          >
            I'm <strong className="font-bold">Kamalesh S</strong> — a Computer Science graduate specializing in native multi-agent AI systems, pathfinding robotics, and high-speed API engineering.
          </motion.p>
        </div>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            onClick={() => scrollToSection('projects')}
            className="px-7 py-3.5 rounded-full bg-blue-600 dark:bg-cyan-500 text-white font-medium text-base flex items-center gap-2 hover:opacity-90 shadow-lg shadow-blue-500/25"
          >
            Explore My Work <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            onClick={() => scrollToSection('about')}
            className="px-7 py-3.5 rounded-full liquid-glass font-medium text-base"
          >
            View Journey & Skills
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            onClick={() => setSelectedProject(featuredNetImmune)}
            className="px-7 py-3.5 rounded-full liquid-glass text-purple-600 dark:text-purple-300 font-medium text-base hover:bg-purple-500/10 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-purple-500" /> Read Research Paper
          </motion.button>
        </motion.div>
      </section>

      {/* Key Metrics Grid - iOS App Zoom Spring Transition */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.05 * idx }}
            className="liquid-card rounded-[28px] cursor-pointer flex flex-col justify-between p-6 sm:p-7 shadow-xl"
          >
            <div className="space-y-1.5">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600 dark:text-cyan-400">
                {m.value}
              </span>
              <h3 className="text-sm font-semibold">
                {m.label}
              </h3>
            </div>
            <p className="text-xs opacity-75 mt-4 pt-3 border-t border-white/40 dark:border-white/10">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Interactive Liquid Terminal Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              Live System Telemetry
            </h2>
            <p className="text-sm opacity-75">
              Simulated real-time execution logs from my core architected systems.
            </p>
          </div>

          {/* Terminal Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full liquid-glass self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('netimmune')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                activeTab === 'netimmune'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              net_immune.py
            </button>
            <button
              onClick={() => setActiveTab('agv')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                activeTab === 'agv'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              agv_copilot.py
            </button>
            <button
              onClick={() => setActiveTab('sysinfo')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-colors ${
                activeTab === 'sysinfo'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              sys_info.sh
            </button>
          </div>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="liquid-glass rounded-[28px] p-6 sm:p-8 shadow-2xl font-mono text-xs sm:text-sm space-y-3 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/40 dark:border-white/10 opacity-70">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs opacity-75">
              bash - 80x24
            </span>
          </div>

          <div className="space-y-2 py-2 min-h-[140px]">
            {terminalLogs[activeTab].map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`leading-relaxed ${log.color}`}
              >
                {log.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Research Spotlight */}
      <motion.section
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="liquid-card rounded-[28px] border-l-4 border-l-blue-600 dark:border-l-cyan-400 space-y-6 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs font-mono font-semibold">
              <BookOpen className="w-3.5 h-3.5" /> Peer-Reviewed Research Paper
            </div>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight">
              "Net Immune: An Autonomous Multi-Agent AI System for Real-Time Endpoint Threat Neutralization"
            </h3>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Published in the International Journal of Research in Advanced Science and Engineering Technology (IJSART), Vol. 12, Issue 5, 2026.
              Authored by <strong>Kamalesh S</strong>, Junaid Ahmed J, John Peter V, Lingesh M.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(featuredNetImmune)}
            className="shrink-0 px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:opacity-90 shadow-lg"
          >
            Inspect Paper & Architecture
          </motion.button>
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}