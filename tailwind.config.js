module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe','hover'],
      margin: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
