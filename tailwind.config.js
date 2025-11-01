/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      esm: "415px",
      sm: "557px",
      es: "625px",
      md: "650px",
      emd: "830px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        whitesmoke: "#f8f9fa",
        smoke: "rgba(255, 255, 255, 0.98)",
        trans: "transparent",
        blueviolet: "rgb(152, 84, 216)",
        blue: "rgb(0, 0, 30)",
        bluesmoke: "#2f374f",
        royal: "#224dcf",
        darkgrey: "rgb(100, 100, 100)",
        primary: {
          50: "#f0f2ff",
          100: "#e4e9ff",
          200: "#cbd4ff",
          300: "#a7b7ff",
          400: "#7b8fff",
          500: "#4c61ff",
          600: "#2f37ff",
          700: "#1a1eff",
          800: "#0e12ff",
          900: "#0000d6",
        },
        gray: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
