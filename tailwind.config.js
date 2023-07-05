/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        md: "2rem",
        lg: "3rem",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Cabin", ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundImage: {
      bgHeader: "url('/assets/images/background-header.svg')",
    },
  },
  plugins: [],
};
