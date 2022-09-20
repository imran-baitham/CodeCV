/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light":
          "url('https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        "nature-dark":
          "url('https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        blob: "blob 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(90deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "75%": {
            transform: "rotate(270deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-img': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '75%': { transform: 'rotate(-270deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 13s linear infinite',
        'rotate-img': 'rotate-img 13s linear infinite',
      }
    },
  },
  plugins: [],
};
