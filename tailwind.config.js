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
        "theme-background": "#f1f2f6",

        "theme-primary": "#f5f5f4",
        "theme-secondary": "#fff1e6",
      },
      keyframes: {
        addColor: {
          "0%": {
            color: "#c86358",
          },
          "80%": {
            color: "#c86358",
          },
          "100%": {
            color: "initial",
          },
        },
      },
      animation: {
        addColor: "addColor 2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".project-transition": {
          transition: "transform 1s ease",
          transform: "scale(0.98)",
        },
        ".project-scale": {
          transform: "scale(1)",
        },
        ".current": {
          color: "#c86358",
        },
        ".modal-transition": {
          transform: "scaleY(.01) scaleX(0)",
          animation:
            "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        },
        ".modal": {
          transform: "scale(0)",
          animation:
            "zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
