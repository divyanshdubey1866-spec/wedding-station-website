/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deepBlack: '#050505',
        softBlack: '#0B0A08',
        warmChampagne: '#D6B36A',
        softChampagne: '#E3C98A',
        lightChampagne: '#F3DFA8',
        antiqueGold: '#B8924A',
        warmIvory: '#F5EFE3',
        mutedBeige: '#B9AE9A'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
};
