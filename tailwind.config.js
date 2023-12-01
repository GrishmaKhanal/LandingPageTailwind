/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 70%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}

/* To put in CSS Files
@tailwind base;
@tailwind components;
@tailwind utilities;
*/