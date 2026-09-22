import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('sk_portfolio_theme_v3');
    if (savedTheme && ['light', 'dark', 'liquid'].includes(savedTheme)) {
      return savedTheme;
    }
    return 'liquid'; // Default to the ultra-unique Liquid Crystal theme!
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'liquid', 'theme-light', 'theme-dark', 'theme-liquid');
    
    root.classList.add(theme);
    root.classList.add(`theme-${theme}`);

    // Standard tailwind dark class support for fallback
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('sk_portfolio_theme_v3', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'liquid';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
