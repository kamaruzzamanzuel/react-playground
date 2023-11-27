/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      "grey-dark": 'var(--color-grey-dark)',
      cyan: 'cyan'
    },
    extend: {},
  },
  plugins: []
}