import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import LiquidBackground from './components/LiquidBackground';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col selection:bg-liquid-accentBlue/20 selection:text-liquid-accentBlue">
        {/* Animated Liquid Background Canvas */}
        <LiquidBackground />

        {/* Floating Capsule Glass Navbar */}
        <Navbar />

        {/* Main Route Content */}
        <main className="flex-1 flex flex-col w-full relative z-10">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;