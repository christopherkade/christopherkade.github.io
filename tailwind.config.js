const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
        slideHello: {
          "0%": { marginTop: "-270px" },
          "5%": { marginTop: "-210px" },
          "33%": { marginTop: "-210px" },
          "38%": { marginTop: "-100px" },
          "66%": { marginTop: "-100px" },
          "71%": { marginTop: "0px" },
          "99.99%": { marginTop: "0px" },
          "100%": { marginTop: "-270px" },
        },
        slideHelloMobile: {
          "0%": { marginTop: "-270px" },
          "5%": { marginTop: "-150px" },
          "33%": { marginTop: "-150px" },
          "38%": { marginTop: "-70px" },
          "66%": { marginTop: "-70px" },
          "71%": { marginTop: "0px" },
          "99.99%": { marginTop: "0px" },
          "100%": { marginTop: "-270px" },
        },
      },
      animation: {
        addColor: "addColor 2s ease-out",
        slideHello: "slideHello 5s linear 1",
        slideHelloMobile: "slideHelloMobile 5s linear 1",
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
        ".current-section": {
          color: "#c86358",
        },
        ".modal-transition": {
          transition: "max-height 3s ease",
          maxHeight: "auto",
        },
        ".fit-available": {
          maxHeight: "1500px",
        },
        ".hello-animation": {
          animation: "slideHello 5s linear infinite",
        },
        ".hello__item": {
          lineHeight: "40px",
          margin: 0,
        },
        ".strike-through-yellow": {
          background:
            "linear-gradient(to top, transparent 0%, transparent 50%, rgb(252 211 77 / 1) 50%, rgb(252 211 77 / 1) 100%)",
        },
        ".strike-through-green": {
          background:
            "linear-gradient(to top, transparent 0%, transparent 50%, rgb(134 239 172 / 1) 50%, rgb(134 239 172 / 1) 100%)",
        },
        ".strike-through-cyan": {
          background:
            "linear-gradient(to top, transparent 0%, transparent 50%, rgb(103 232 249 / 1) 50%, rgb(103 232 249 / 1) 100%)",
        },
        ".strike-through-violet": {
          background:
            "linear-gradient(to top, transparent 0%, transparent 50%, rgb(196 181 253 / 1) 50%, rgb(196 181 253 / 1) 100%)",
        },
        ".strike-through-animation": {
          transition: "background-color 2s",
          backgroundColor: "transpanrent",
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
