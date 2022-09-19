/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // font-roboto
      },
      colors: {
        white: "#ffffff",
        black: "#141414",
        lightGray: "#F5F5F5",
        
        bgColor: "#FAFAFA",
        
        darkBlue: "#122A59",
        blue: "#1143A6",
        lightOrange: "#FFECD9",
        orange: "#F28C25",
        lightRed: "#FFD9D9",
        red: "#F22424",
        lightBlue2: "#D9E6FF",
        blue2: "#0140BF",
        light: "#FAFCFF",
        xblue: "#0056FF",

        input: "#C4C9D4",
      },
    },
  },
  variants: {},
  plugins: [],
}