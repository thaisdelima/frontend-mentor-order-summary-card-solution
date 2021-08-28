module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        blue: {
          pale: 'hsl(225, 100%, 94%)',
          bright: 'hsl(245, 75%, 52%)',
          verypale: 'hsl(225, 100%, 98%)',
          desaturated: 'hsl(224, 23%, 55%)',
          dark: 'hsl(223, 47%, 23%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
