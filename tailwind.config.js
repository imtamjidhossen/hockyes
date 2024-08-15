/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'manrope': ['"Manrope"', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          clifford: '#da373d',
        }
      },

    },
    plugins: [],
  }
