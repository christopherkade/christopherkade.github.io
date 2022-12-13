const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "theme-green-dark": "#CCD5AE",
        "theme-green-light": "#E9EDC9",
        "theme-brown-dark": "#D4A373",
        "theme-beige": "#FAEDCD",
        "theme-white": "#FEFAE0",
        "theme-text": "#4a060d",
        "theme-select": "#c86358",
        "theme-background": "#f5eae6",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
        loadLine: {
          "0%": {
            opacity: 0,
            height: 0,
          },
          "50%": {
            height: 0,
            opacity: 0,
          },
          "100%": {
            height: "400px",
            opacity: 1,
          },
        },
        offsetTitle: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            transform: "translateY(-60px)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 4s",
        showLine: "loadLine 2s",
        offsetTitle: "offsetTitle 4s forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-translate-y": {
          transform: "translateY(10px)",
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
