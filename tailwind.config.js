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
      colors: {
        lightHover: '#f9f6efff',
        darkHover: '#2a004a',
        darkTheme: '#181818',
      },
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
        'orange' : '4px 4px 0 #F03603'
      }
    },
  },
  plugins: [],
}
