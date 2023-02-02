module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
