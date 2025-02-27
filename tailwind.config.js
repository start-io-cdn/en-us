/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        secondary: '#6C63FF',
        accent: '#00E5FF',
        background: '#0A1929',
        foreground: '#F5F5F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 229, 255, 0.7)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 229, 255, 0.9)' },
        },
      },
    },
  },
  plugins: [],
};