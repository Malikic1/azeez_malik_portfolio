/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      esm: "415px",
      sm: "480px",
      es: "510px",
      md: "768px",
      lg: "976px",
      mlg: "1060px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        whitesmoke: "rgba(225, 225, 225)",
        blueviolet: " rgb(152, 84, 216)",
        blue: "rgb(0, 0, 50)",
        bluesmoke: "rgba(56, 23, 29, 0.561)",
        royal: " #224dcf",
        darkgrey: "rgb(130 130 130)",
      },
    },
  },
  plugins: [],
};
