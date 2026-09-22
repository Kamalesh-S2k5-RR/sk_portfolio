/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        liquid: {
          bgLight: '#f4f6fb',
          bgDark: '#08090d',
          glassLight: 'rgba(255, 255, 255, 0.55)',
          glassDark: 'rgba(18, 20, 29, 0.55)',
          borderLight: 'rgba(255, 255, 255, 0.7)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
          accentBlue: '#0071e3',
          accentCyan: '#00f2fe',
          accentPurple: '#7000ff',
          accentPink: '#f43f5e',
          textLightPrimary: '#1d1d1f',
          textLightSecondary: '#515154',
          textDarkPrimary: '#f5f5f7',
          textDarkSecondary: '#a1a1a6',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        liquidLight: '0 8px 32px 0 rgba(31, 38, 135, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
        liquidDark: '0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
        liquidGlowLight: '0 0 30px rgba(0, 113, 227, 0.2), 0 8px 32px rgba(31, 38, 135, 0.12)',
        liquidGlowDark: '0 0 35px rgba(0, 242, 254, 0.25), 0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'blob-slow': 'blob 12s infinite ease-in-out',
        'blob-delayed': 'blob 14s infinite ease-in-out 4s',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};