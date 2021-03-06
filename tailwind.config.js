module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        dark: "#34313a",
      },
      backgroundColor: {
        brown: "rgba(26,24,29,.06)",
        orange: "#fd7e14",
        yellow: "#ffbe5d",
        red: "#dc3545",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
