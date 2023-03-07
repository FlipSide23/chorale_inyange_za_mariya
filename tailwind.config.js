/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'small-pc': { max: '1108px' },
      'big-tablet': { max: '992px' },
      tablet: { max: '767px' },
      phone: { max: '600px' },
      'small-phone': { max: '320px' },
    },

    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },

    extend: {
      colors: {
        green: '5EB436',
        blue: '381DDB',
        skyBlue: '52B3D2',
        grey: '#222222',
        current: 'currentColor',
        'brand-blue': '#52B3D2',
        'brand-green': '#5EB436',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
