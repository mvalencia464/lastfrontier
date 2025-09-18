/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'light': '#5BA4D4', // Light blue from logo
          'dark': '#2E5F7A',  // Dark blue from logo
          'gradient-start': '#5BA4D4',
          'gradient-end': '#2E5F7A'
        }
      }
    },
  },
  plugins: [],
};
