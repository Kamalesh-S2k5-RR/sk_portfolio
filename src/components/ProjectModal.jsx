import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, BookOpen, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl liquid-glass rounded-3xl p-6 sm:p-10 shadow-2xl z-10 border border-white/80 dark:border-white/20 overflow-hidden my-auto"
        >
          {/* Top specular glow border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-liquid-accentBlue via-purple-500 to-liquid-accentCyan" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan border border-liquid-accentBlue/20 dark:border-liquid-accentCyan/20">
              {project.category || "Featured Project"}
            </span>
            {project.year && (
              <span className="text-xs font-mono opacity-60 text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                • {project.year}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
            {project.title}
          </h2>

          <p className="text-base sm:text-lg text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary leading-relaxed mb-6">
            {project.fullDesc || project.desc}
          </p>

          {/* Key Metrics / Highlights if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 flex flex-col">
                  <span className="text-xs font-medium text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">{metric.label}</span>
                  <span className="text-lg font-bold text-liquid-accentBlue dark:text-liquid-accentCyan">{metric.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan" /> Architecture & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-white/60 dark:bg-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary border border-white/80 dark:border-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          {project.features && (
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Core Capabilities
              </h4>
              <ul className="space-y-2 text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-liquid-accentBlue dark:text-liquid-accentCyan mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Publication note if applicable */}
          {project.publicationNote && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
              <BookOpen className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Peer-Reviewed Publication</span>
                {project.publicationNote}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/40 dark:border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-2xl bg-liquid-textLightPrimary dark:bg-white text-white dark:text-liquid-bgDark font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-4 h-4" /> View Code Repository
              </a>
            )}
            {project.pubLink && (
              <a
                href={project.pubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-2xl bg-liquid-accentBlue text-white font-medium text-sm flex items-center gap-2 hover:bg-liquid-accentBlue/90 transition-colors shadow-lg shadow-liquid-accentBlue/25"
              >
                <BookOpen className="w-4 h-4" /> Read IJSART Paper
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-2xl bg-white/50 dark:bg-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary font-medium text-sm hover:bg-white/80 dark:hover:bg-white/20 transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

