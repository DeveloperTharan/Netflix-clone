/* * @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '425px',
        'lg': '660px',
        'xl': '768px',
        '2xl': '991px',
        '3xl': '1024px',
        '4xl': '1256px',
        '5xl': '1560px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}