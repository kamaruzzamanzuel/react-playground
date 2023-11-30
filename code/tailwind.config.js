// /** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  prefix: "t-",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: false,
    colors: {
      primary: 'var(--color-primary)',
      "grey-2": 'var(--color-grey-2)',
      cyan: 'cyan'
    },
    extend: {},
    // https://tailwindcss.com/docs/screens
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px'
    }
  },
  // corePlugins: {
  //   container: false
  // },
  plugins: [
    require('tailwind-bootstrap-grid')(
      {
        containerMaxWidths: {
          'sm': '540px',
          'md': '720px',
          'lg': '960px',
          'xl': '1140px',
          '2xl': '1320px',
          "3xl": '1500px'
        },
        //   // gridColumns: 12
      }
    ),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f !important',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a !important'
          },
        },
      })
    })
  ]
}