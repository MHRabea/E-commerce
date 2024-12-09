/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ojuju: ["Ojuju", "sans-serif"],
        Madimi: ["Madimi One", "sans-serif"],
        Dosis: ["Dosis", "sans-serif"],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'customBlue': '0 6px 10px rgba(100, 100, 300, 0.8)',
        'customBlack': '0 6px 10px rgba(0, 0, 0, 0.8)',
        'customSky': '0 6px 10px rgba(135, 206, 235)',
        'customYellow': '0 6px 10px rgba(132, 204, 22)',
        'customWhite': '0 6px 10px rgba(248, 250, 252)',
      }
    },
  },
  plugins: [],
};