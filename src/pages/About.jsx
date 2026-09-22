import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen, Layers, Check, Copy, Download, Cpu, Shield, Code, Server, Database } from 'lucide-react';

export default function About() {
  const [copiedCitation, setCopiedCitation] = useState(false);

  const citationText = `Kamalesh S, Junaid Ahmed J, John Peter V, Lingesh M. "Net Immune: An Autonomous Multi-Agent AI System for Real-Time Endpoint Threat Neutralization." International Journal of Research in Advanced Science and Engineering Technology (IJSART), vol. 12, no. 5, pp. 179-182, 2026.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const skillCategories = [
    {
      category: 'AI Models & LLMs',
      icon: Cpu,
      skills: ['Llama-3', 'Gemini', 'Groq API', 'Prompt Engineering', 'XAI', 'RAG (basics)'],
    },
    {
      category: 'Web & API Engineering',
      icon: Code,
      skills: ['FastAPI', 'REST APIs', 'React.js', 'Node.js'],
    },
    {
      category: 'Programming Languages',
      icon: Server,
      skills: ['Python', 'Java', 'SQL', 'C'],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: ['Firebase', 'MongoDB (familiar)'],
    },
    {
      category: 'Security & Technologies',
      icon: Shield,
      skills: ['Kali Linux', 'Docker (familiar)', 'VS Code', 'GitHub', 'AWS (basics)'],
    },
    {
      category: 'Core Competencies',
      icon: Layers,
      skills: ['Networking', 'Debugging', 'System Architecture', 'CI/CD (familiar)', 'Agile Methodology'],
    },
  ];

  const certs = [
    { title: 'Net Immune Research Publication', issuer: 'IJSART Journal (2026)', highlight: true },
    { title: 'Smart Motion Hackathon', issuer: 'BONFIGLIOLI', highlight: true },
    { title: 'Artificial Intelligence', issuer: 'IBM SkillsBuild' },
    { title: 'Cybersecurity Fundamentals', issuer: 'IBM SkillsBuild' },
    { title: 'Python Basics', issuer: 'Infosys Springboard' },
    { title: 'Data Analytics', issuer: 'Cloud Skills Boost' },
    { title: 'Data Science / Python', issuer: 'BICS Global' },
    { title: 'Microsoft Essentials', issuer: 'Microsoft' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan text-xs font-mono font-semibold"
        >
          / ABOUT & EVOLUTION
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary"
        >
          Engineering solutions from <br className="hidden sm:inline" />
          <span className="liquid-text-gradient">silicon hardware to artificial intelligence.</span>
        </motion.h1>
      </section>

      {/* Main Grid: Bio & Education */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Story & Journey */}
        <div className="lg:col-span-2 space-y-8">
          <div className="liquid-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              Profile & Background Summary
            </h2>
            <p className="text-base text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary leading-relaxed">
              Computer Science graduate with project experience in Python, React, and FastAPI. I love building systems from scratch and learning new technologies along the way. I'm excited to start my career at Texawave, where I can learn, contribute, and grow in a supportive environment.
            </p>
            <p className="text-base text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary leading-relaxed">
              My engineering philosophy revolves around full-stack transparency: understanding how hardware signals flow through microcontrollers, how REST APIs process async payloads, and how LLM multi-agent engines classify zero-shot threats in real time.
            </p>
          </div>

          {/* 3-Phase Evolution Timeline */}
          <div className="liquid-card space-y-6">
            <h2 className="text-xl font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              Engineering Evolution Timeline
            </h2>
            <div className="space-y-6 relative border-l-2 border-white/60 dark:border-white/10 pl-6 ml-2">
              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-white dark:ring-liquid-bgDark" />
                <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Phase 1 · 2024</span>
                <h3 className="text-base font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                  Hardware & Embedded Autonomous Robotics
                </h3>
                <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                  Programmed C algorithms for IR sensor arrays and motor control on custom autonomous line-following robots.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-liquid-accentBlue ring-4 ring-white dark:ring-liquid-bgDark" />
                <span className="text-xs font-mono font-semibold text-liquid-accentBlue dark:text-liquid-accentCyan uppercase tracking-wider">Phase 2 · 2025</span>
                <h3 className="text-base font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                  Full-Stack Architecture & Physics Simulations
                </h3>
                <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                  Built AGV pathfinding simulations with dynamic A*, battery physics, and REST APIs via FastAPI and React. Developed Cardio-AI and full-stack booking platforms with Firebase.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-liquid-bgDark" />
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Phase 3 · 2026</span>
                <h3 className="text-base font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                  Multi-Agent AI Systems & Peer-Reviewed Research
                </h3>
                <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                  Engineered Net Immune (Native Windows EDR & Enterprise Dashboard) using Llama-3 and 6 async agents. Published research paper in IJSART.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Publication */}
        <div className="space-y-8">
          {/* Education Card */}
          <div className="liquid-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-liquid-accentBlue/10 text-liquid-accentBlue dark:text-liquid-accentCyan">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">2022 - 2026</span>
                <h3 className="text-lg font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                  Education
                </h3>
              </div>
            </div>
            <div className="pt-2 border-t border-white/40 dark:border-white/10 space-y-2">
              <h4 className="font-bold text-base text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                Kingston Engineering College
              </h4>
              <p className="text-xs font-medium text-liquid-accentBlue dark:text-liquid-accentCyan">Katpadi, Tamil Nadu</p>
              <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                Bachelor of Engineering - CSE
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold mt-2">
                CGPA : 7.5
              </div>
            </div>
          </div>

          {/* Publication Card */}
          <div className="liquid-card space-y-4">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <BookOpen className="w-4 h-4" /> Publication Details
            </div>
            <h4 className="font-bold text-sm leading-snug text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              "Net Immune: An Autonomous Multi-Agent AI System for Real-Time Endpoint Threat Neutralization"
            </h4>
            <p className="text-xs text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary leading-relaxed">
              IJSART Journal, Vol. 12, Issue 5, pp. 179-182, 2026.
            </p>

            <button
              onClick={copyCitation}
              className="w-full py-2.5 rounded-xl bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/15 text-xs font-mono font-medium flex items-center justify-center gap-2 hover:bg-white/90 dark:hover:bg-white/20 transition-colors"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Citation Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy IJSART Citation
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
            Technical Arsenal & Stack
          </h2>
          <p className="text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
            Grouped technologies and core competencies mastered throughout project development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.category} className="liquid-card space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-liquid-accentBlue/10 text-liquid-accentBlue dark:text-liquid-accentCyan">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-white/60 dark:bg-white/10 border border-white/80 dark:border-white/15 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Verified Certifications & Accolades
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.title}
              className={`p-5 rounded-2xl liquid-glass border flex flex-col justify-between space-y-3 ${
                c.highlight
                  ? 'border-liquid-accentBlue/50 dark:border-liquid-accentCyan/40 shadow-lg'
                  : 'border-white/60 dark:border-white/10'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-liquid-accentBlue dark:text-liquid-accentCyan">
                  {c.issuer}
                </span>
                <h3 className="font-bold text-sm text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary mt-1">
                  {c.title}
                </h3>
              </div>
              <div className="w-full h-1 rounded-full bg-gradient-to-r from-liquid-accentBlue to-purple-500 opacity-60" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}