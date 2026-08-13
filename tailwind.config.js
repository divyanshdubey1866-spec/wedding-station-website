/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        warmChampagne: '#D6B36A',
        softChampagne: '#E3C98A',
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
