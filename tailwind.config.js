// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      "0": "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      full: "100vh"
    }
  },
  variants: {},
  plugins: []
};
