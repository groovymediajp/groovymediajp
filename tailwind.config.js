module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#8FC509",
          50: "#E8FCB8",
          100: "#E0FB9F",
          200: "#D1F86F",
          300: "#C1F63E",
          400: "#B2F40D",
          500: "#8FC509",
          600: "#6C9407",
          700: "#486305",
          800: "#253302",
          900: "#010200",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
