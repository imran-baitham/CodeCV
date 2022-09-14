/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {},
    // colors: {
    //   'yellow': "hsl(31, 100%, 70%)"
    // },
  },
  plugins: [],
}