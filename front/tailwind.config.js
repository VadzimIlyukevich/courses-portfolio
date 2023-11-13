/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'greyBase': '#dad8de',
      }
    },
  },
  plugins: [],
}

