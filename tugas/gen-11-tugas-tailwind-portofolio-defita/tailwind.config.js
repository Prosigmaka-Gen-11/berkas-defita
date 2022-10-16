/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'title': ['Fredoka One', 'cursive']
      },
      colors: {
        primary: '#ffffff',
        light: '#d7d7d7',
        dark: '#383838',
        dasar: '#87511b'
      }
    },
  },
  plugins: [],
}
