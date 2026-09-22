import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Command, Menu, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo with Liquid Refraction Pill */}
          <NavLink
            to="/"
            className="group relative flex items-center gap-2 px-4 py-2 rounded-2xl liquid-glass border border-white/70 dark:border-white/15 shadow-lg transition-transform duration-300 active:scale-95"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-liquid-accentBlue dark:bg-liquid-accentCyan animate-pulse" />
            <span className="font-bold tracking-tight text-lg text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary">
              Kamalesh<span className="text-liquid-accentBlue dark:text-liquid-accentCyan">.S</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full liquid-glass border border-white/70 dark:border-white/15 shadow-xl">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative px-5 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white dark:bg-white/15 shadow-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? 'text-liquid-accentBlue dark:text-liquid-accentCyan font-semibold'
                        : 'text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary hover:text-liquid-textLightPrimary dark:hover:text-liquid-textDarkPrimary'
                    }`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Action Tools: Command Palette & Theme Switcher */}
          <div className="flex items-center gap-2">
            {/* Command Palette Button */}
            <button
              onClick={() => setIsCmdOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl liquid-glass border border-white/70 dark:border-white/15 text-xs font-mono text-liquid-textLightSecondary dark:text-liquid-textDarkSecondary hover:text-liquid-textLightPrimary dark:hover:text-liquid-textDarkPrimary transition-all duration-200 hover:scale-105 active:scale-95"
              title="Command Palette (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5 text-liquid-accentBlue dark:text-liquid-accentCyan" />
              <span>⌘K</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-2xl liquid-glass border border-white/70 dark:border-white/15 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -12, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 12, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-liquid-accentBlue" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-2xl liquid-glass border border-white/70 dark:border-white/15 text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="md:hidden mt-3 max-w-6xl mx-auto pointer-events-auto"
            >
              <div className="liquid-glass rounded-3xl p-4 shadow-2xl space-y-2 border border-white/80 dark:border-white/15">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-liquid-accentBlue/10 dark:bg-liquid-accentCyan/10 text-liquid-accentBlue dark:text-liquid-accentCyan font-bold'
                          : 'text-liquid-textLightPrimary dark:text-liquid-textDarkPrimary hover:bg-white/40 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />
    </>
  );
}