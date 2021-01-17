module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
