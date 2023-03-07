/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'small-pc': {'max': '1108px'},
      'big-tablet': {'max': '992px'},
      'tablet': {'max': '767px'},
      'phone': {'max': '600px'},
      'small-phone': {'max': '320px'},
    },

    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif']
    },

    extend: {
      colors: {
        green: '5EB436',
        blue: '381DDB',
        skyBlue: '52B3D2',
        grey: '222222',
        current: 'currentColor',
      },

    },
  },
  plugins: [],
};