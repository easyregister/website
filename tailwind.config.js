module.exports = {
  purge: ['./src/**/*.tsx'],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Raleway', 'sans-serif'],
        'body': ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
