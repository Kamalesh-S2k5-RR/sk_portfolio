/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ambient: {
          bg: '#0d0d12',
          card: '#161620',
          text: '#f0f0f5',
          accent1: '#5bc0be',
          accent2: '#ff6b6b',
          accent3: '#7b5ea7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(91, 192, 190, 0.15)',
      }
    },
  },
  plugins: [],
};