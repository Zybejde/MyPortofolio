const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",       // Next.js 13 app dir
    "./pages/**/*.{js,jsx,ts,tsx}",     // pages dir if you have it
    "./components/**/*.{js,jsx,ts,tsx}" // your components
  ],
  theme: {
    extend: {
      colors:  {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow:{
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
