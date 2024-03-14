/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ojuju : ["Ojuju" , "sans-serif"],
        Madimi : ["Madimi One" , "sans-serif"],
        Dosis : ["Dosis" , "sans-serif"],
      }
    },
  },
  plugins: [],
}