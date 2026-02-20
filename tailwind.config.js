/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#9a9a9a',
          600: '#525252',
          700: '#3a3a3a',
          800: '#262626',
          900: '#171717',
          950: '#0f0f0f',
        },
        teal: {
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#e5e5e5',
          300: '#c8c8c8',
          400: '#b0b0b0',
          500: '#9a9a9a',
          600: '#6a6a6a',
          700: '#3a3a3a',
          800: '#252525',
          900: '#171717',
          950: '#0f0f0f',
        },
        cyan: {
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#e5e5e5',
          300: '#c8c8c8',
          400: '#9a9a9a',
          500: '#9a9a9a',
          600: '#6a6a6a',
          700: '#3a3a3a',
          800: '#252525',
          900: '#171717',
          950: '#0f0f0f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blob': 'blob 7s infinite',
        'typewriter-blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        blink: {
          '0%, 100%': { borderColor: 'currentColor' },
          '50%': { borderColor: 'transparent' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
