/** @type {import('tailwindcss').Config} */

var defaultTheme = require("tailwindcss/defaultTheme");

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
        sans: ["Cabin"].concat(defaultTheme.fontFamily.sans),
      },
    },
    backgroundImage: {
      header: "url('/assets/images/background-header.svg')",
    },
  },
  plugins: [],
};
