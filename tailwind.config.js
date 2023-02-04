/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
      },
      maxWidth: {
        container: '1140px',
      },
      backgroundColor: {
        brand: {
          800: '#175387',
          900: '#0b5492',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
