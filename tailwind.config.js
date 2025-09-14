/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in',
        'slideUp': 'slideUp 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-100%)' },
          '25.1%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-200%)' },
          '50.1%': { transform: 'translateY(-200%)' },
          '75%': { transform: 'translateY(-300%)' },
          '75.1%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(-400%)' },
        },
      },
    },
  },
  plugins: [],
};