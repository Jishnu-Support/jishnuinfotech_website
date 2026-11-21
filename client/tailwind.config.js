/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#061a40',
          deepBlue: '#0B3D91',
          royalBlue: '#1557bf',
          brightBlue: '#1E90FF',
          sky: '#60a5fa',
          cyan: '#06b6d4',
          orange: '#FF7A00',
          amber: '#f59e0b',
          lightOrange: '#FFA040',
          darkBg: '#080E1A',
          cardDark: '#0F172A',
          cardDarkBorder: '#1E293B',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(30, 144, 255, 0.15) 0%, rgba(255, 122, 0, 0.08) 50%, transparent 80%)',
        'gradient-brand': 'linear-gradient(135deg, #0B3D91 0%, #1E90FF 50%, #FF7A00 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF7A00 0%, #FFA040 100%)',
        'gradient-blue': 'linear-gradient(135deg, #0B3D91 0%, #1E90FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite reverse',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 122, 0, 0.4)',
        'glow-blue': '0 0 30px -5px rgba(30, 144, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
