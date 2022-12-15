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
            transform: "translateY(-40px)",
            opacity: 1,
          },
        },
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
        fadeIn: "fadeIn 4s",
        showLine: "loadLine 2s",
        offsetTitle: "offsetTitle 4s forwards",
        rotateStar: "rotate",
        addColor: "addColor 2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-translate-y": {
          transform: "translateY(10px)",
        },
        ".offset-tooltip": {
          transform: "translateX(100px)",
        },
        ".overflow-clip-margin": {
          overflowClipMargin: "content-box",
        },
        ".about-img-radius": {
          borderRadius: "400px 400px 0px 0px",
        },
        ".rotate-star": {
          transition: "rotate 1s",
          rotate: "1turn",
        },
        ".durins-gate": {
          transformStyle: "preserve-3d",
        },
        ".project-transition": {
          // transition: "scale 1s ease",
          transition: "transform 1s ease",
          transform: "scale(0.98)",
        },
        ".project-scale": {
          transform: "scale(1)",
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
