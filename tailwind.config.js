module.exports = {
  purge: [
    './src/**/*.html',
		'./src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Myriad Pro'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}