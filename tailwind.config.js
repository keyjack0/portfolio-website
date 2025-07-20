const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        lighHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#181818',
      },
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"],
      }
    },
  },
  plugins: [],
}
