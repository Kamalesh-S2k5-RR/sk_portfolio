import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Command, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu dropdown is open
  useBodyScrollLock(mobileMenuOpen);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const barRef = useRef(null);
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Move pill DOM element to target link node (User's Model JS Logic)
  const movePillTo = (el) => {
    if (!barRef.current || !pillRef.current || !el) return;
    const b = barRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    pillRef.current.style.left = `${r.left - b.left}px`;
    pillRef.current.style.width = `${r.width}px`;
  };

  // Sync pill to active section on mount or section change
  useEffect(() => {
    const activeEl = linkRefs.current[activeSection];
    if (activeEl) {
      requestAnimationFrame(() => movePillTo(activeEl));
    }
  }, [activeSection]);

  // Scroll spy to detect active section (Locked during programmatic click scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return; // Prevent intermediate stepping during link click!

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== navItems[i].id) {
            setActiveSection(navItems[i].id);
          }
          break;
        }
      }
    };

    const handleResize = () => {
      const activeEl = linkRefs.current[activeSection];
      if (activeEl) movePillTo(activeEl);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    // Lock scroll spy to prevent intermediate tab stepping
    isProgrammaticScrollRef.current = true;
    setActiveSection(id);
    setMobileMenuOpen(false);

    // Direct snap to target nav link
    const targetEl = linkRefs.current[id];
    if (targetEl) {
      movePillTo(targetEl);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Unlock scroll spy after smooth scroll finishes
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);
  };

  const getThemeIcon = () => {
    if (theme === 'dark') return <Moon className="w-4 h-4 text-cyan-400" />;
    return <Sun className="w-4 h-4 text-amber-500" />;
  };

  const getThemeLabel = () => {
    if (theme === 'dark') return 'Dark';
    return 'Light';
  };

  return (
    <>
      {/* Separated Floating Dynamic Island Navbar */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full liquid-glass shadow-lg transition-transform duration-150 active:scale-95 text-left border border-white/80 dark:border-white/15"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
              Kamalesh<span className="text-blue-600 dark:text-cyan-400">.S</span>
            </span>
          </button>

          {/* User's Exact Model Navbar: nb-10 Spring Menu */}
          <nav
            ref={barRef}
            onPointerLeave={() => {
              const activeEl = linkRefs.current[activeSection];
              if (activeEl) movePillTo(activeEl);
            }}
            className="nb-10__bar hidden md:flex items-center"
            aria-label="Primary Navigation"
          >
            {/* Elastic Spring Pill Indicator */}
            <span ref={pillRef} className="nb-10__pill" aria-hidden="true" />

            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  ref={(el) => (linkRefs.current[item.id] = el)}
                  onPointerEnter={(e) => movePillTo(e.currentTarget)}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`nb-10__link ${
                    isActive
                      ? 'text-blue-600 dark:text-cyan-400 font-bold'
                      : 'text-slate-800 dark:text-slate-200 opacity-80 hover:opacity-100'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Command Palette & Theme Switcher */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setIsCmdOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-mono opacity-85 hover:opacity-100 transition-all duration-150 hover:scale-105 active:scale-95 border border-white/80 dark:border-white/15"
              title="Command Palette (Ctrl + K)"
            >
              <Command className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>K</span>
            </button>

            {/* 2-Theme Switcher Pill: Light (Liquid Glass) vs Dark */}
            <button
              onClick={cycleTheme}
              className="relative px-4 py-2 rounded-full liquid-glass flex items-center gap-2 text-xs font-medium transition-transform duration-150 hover:scale-105 active:scale-95 shadow-md border border-white/80 dark:border-white/15"
              aria-label="Toggle Theme"
              title="Switch Theme (Light, Dark)"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 6, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  {getThemeIcon()}
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {getThemeLabel()}
                  </span>
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full liquid-glass text-slate-900 dark:text-white border border-white/80 dark:border-white/15"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
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
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-full text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 font-bold'
                        : 'opacity-85 hover:opacity-100 hover:bg-white/40 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
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