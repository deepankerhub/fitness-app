/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      borderRadius: {
          '56px': '56px',
          '20px' : '20px',
          '32px' : '32px',
          '36px' : '36px',
          '48px' : '48px',
        },
    },
  },
  plugins: [],
}}
