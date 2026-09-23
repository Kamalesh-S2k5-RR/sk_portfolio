import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import LiquidBackground from './components/LiquidBackground';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-blue-600">
        {/* Minimalist Liquid Glass Custom Cursor */}
        <CustomCursor />

        {/* Animated Background Canvas */}
        <LiquidBackground />

        {/* Floating Capsule Glass Navbar with ScrollSpy */}
        <Navbar />

        {/* Single-Page Continuous Scroll Sections */}
        <main className="flex-1 w-full relative z-10 space-y-12 sm:space-y-20 pb-20">
          <section id="home">
            <Home />
          </section>

          <section id="about" className="pt-12 sm:pt-20">
            <About />
          </section>

          <section id="projects" className="pt-12 sm:pt-20">
            <Projects />
          </section>

          <section id="contact" className="pt-12 sm:pt-20">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full py-8 px-4 border-t border-white/40 dark:border-white/10 text-center text-xs font-mono opacity-70">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © 2026 <strong>Kamalesh S</strong>. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>B.E. CSE Graduate</span>
              <span>•</span>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">Texawave Ready</span>
            </div>
          </div>
        </footer>
        
        {/* Vercel Web Analytics */}
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;