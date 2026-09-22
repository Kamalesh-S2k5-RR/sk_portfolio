import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Check, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const contactInfo = {
    email: 'selvamkamalesh.5780@gmail.com',
    phone: '+91-9444180741',
    linkedin: 'https://linkedin.com/in/Kamalesh.S',
    github: 'https://github.com/kamalesh-S2K5-RR',
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan text-xs font-mono font-semibold"
        >
          / GET IN TOUCH
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary"
        >
          Let's connect & build together.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary max-w-2xl"
        >
          Whether you have a question about my research on Net Immune, want to discuss AGV pathfinding, or have an exciting opportunity, my inbox is open.
        </motion.p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="liquid-card space-y-6"
        >
          <h2 className="text-xl font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
            Transmit a Direct Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-semibold text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Johnson"
                className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/70 dark:border-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary outline-none focus:border-liquid-accentBlue dark:focus:border-liquid-accentCyan transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-semibold text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@company.com"
                className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/70 dark:border-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary outline-none focus:border-liquid-accentBlue dark:focus:border-liquid-accentCyan transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-semibold text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary uppercase tracking-wider">
                Message Content
              </label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your query or message here..."
                className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/70 dark:border-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary outline-none focus:border-liquid-accentBlue dark:focus:border-liquid-accentCyan transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-liquid-accentBlue text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-liquid-accentBlue/90 transition-all shadow-lg shadow-liquid-accentBlue/25 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Transmitting Message...</>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" /> Message Transmitted Successfully!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Transmit Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Direct Transmission Channels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Status Box */}
          <div className="liquid-card border-l-4 border-l-emerald-500 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Career Status
            </span>
            <h3 className="text-lg font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              Excited to start career at Texawave
            </h3>
            <p className="text-xs text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
              Open to collaborative research, open-source AI projects, and system software discussions.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="liquid-card space-y-4">
            <h3 className="text-lg font-bold text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              Direct Communication Channels
            </h3>

            <div className="space-y-3 font-mono text-sm">
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="truncate hover:underline text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                    {contactInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 rounded-xl hover:bg-white/80 dark:hover:bg-white/15 text-liquid-textLightSecondary shrink-0"
                  title="Copy Email"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                    {contactInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.phone, 'phone')}
                  className="p-2 rounded-xl hover:bg-white/80 dark:hover:bg-white/15 text-liquid-textLightSecondary shrink-0"
                  title="Copy Phone"
                >
                  {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <LinkedinIcon className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan shrink-0" />
                  <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="truncate hover:underline text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                    linkedin.com/in/Kamalesh.S
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <GithubIcon className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan shrink-0" />
                  <a href={contactInfo.github} target="_blank" rel="noreferrer" className="truncate hover:underline text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
                    github.com/kamalesh-S2K5-RR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}