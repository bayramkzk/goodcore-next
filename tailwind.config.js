/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'header-top': '11px',
        '2xs': '.625rem',
      },
      maxWidth: {
        container: '1140px',
      },
      colors: {
        primary: {
          500: '#1f92f4',
          800: '#175387',
          900: '#0b5492',
        },
      },
      backgroundColor: {
        hero: '#ebeef6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
