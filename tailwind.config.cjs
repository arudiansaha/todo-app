/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      brightBlue: 'hsl(220, 98%, 61%)',
      darkBlue: 'hsl(235, 21%, 11%)',
      desaturedBlue: 'hsl(235, 24%, 19%)',
      lightGray: 'hsl(0, 0%, 98%)',
      grayishBlue: {
        50: 'hsl(236, 33%, 92%)',
        100: 'hsl(233, 11%, 84%)',
        200: 'hsl(234, 39%, 85%)',
        300: 'hsl(236, 9%, 61%)',
        400: 'hsl(234, 11%, 52%)',
        500: 'hsl(235, 19%, 35%)',
        600: 'hsl(233, 14%, 35%)',
        700: 'hsl(237, 14%, 26%)',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
