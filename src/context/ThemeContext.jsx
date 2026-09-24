import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('sk_portfolio_theme_v5');
    if (savedTheme === 'dark') {
      return 'dark';
    }
    return 'liquid'; // Liquid Glass theme by default
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'liquid', 'theme-light', 'theme-dark', 'theme-liquid');
    
    if (theme === 'dark') {
      root.classList.add('dark', 'theme-dark');
    } else {
      root.classList.add('liquid', 'theme-liquid');
    }

    localStorage.setItem('sk_portfolio_theme_v5', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'liquid' : 'dark'));
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
