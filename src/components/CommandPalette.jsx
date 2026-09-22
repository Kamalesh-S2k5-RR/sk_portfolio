import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Home, User, Briefcase, Mail, Sun, Moon, FileText, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { id: 'home', label: 'Go to Home', icon: Home, action: () => navigate('/') },
    { id: 'about', label: 'Go to About & Journey', icon: User, action: () => navigate('/about') },
    { id: 'projects', label: 'View Architected Projects', icon: Briefcase, action: () => navigate('/projects') },
    { id: 'contact', label: 'Contact Kamalesh S', icon: Mail, action: () => navigate('/contact') },
    { id: 'theme', label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, icon: theme === 'dark' ? Sun : Moon, action: () => toggleTheme() },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl liquid-glass rounded-3xl p-4 shadow-2xl z-10 border border-white/80 dark:border-white/20 overflow-hidden"
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 px-3 py-2 border-b border-white/40 dark:border-white/10 mb-2">
            <Search className="w-5 h-5 text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary" />
            <input
              type="text"
              placeholder="Type a command or search sections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full bg-transparent outline-none text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary placeholder:text-liquid-textLightSecondary dark:placeholder:text-liquid-textDarkSecondary font-medium text-base"
            />
            <button onClick={onClose} className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options */}
          <div className="max-h-64 overflow-y-auto space-y-1 p-1">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left hover:bg-white/60 dark:hover:bg-white/10 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary font-medium transition-colors text-sm"
                  >
                    <Icon className="w-4 h-4 text-liquid-accentBlue dark:text-liquid-accentCyan" />
                    <span>{cmd.label}</span>
                  </button>
                );
              })
            ) : (
              <div className="py-6 text-center text-sm text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary">
                No matching commands found.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

