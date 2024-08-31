/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    fadeIn: 'fadeIn 2s ease-in-out',
    slideUp: 'slideUp 1.5s ease-in-out',
  },
}