/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#2D194E",
      white: "#FFFFFF",
      black: "#000000",
      graybg: "#F5F6F860",
      red: "#FC153B",
      darkRed: "#A80520",
      darkgray: "#808286",
      darkblueopacity: "#2D194E10",
      purple: "#5C1D62",
    },
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
        backgroundmobile: "url('/backgroundmobile.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
