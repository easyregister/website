module.exports = {
  content: ['./src/**/*.tsx'],
  jit: true,
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'title': ['Raleway', 'sans-serif'],
        'body': ['Libre Franklin', 'sans-serif'],
        'logo': ['Pacifico', 'cursive'],
      },
      colors: {
        logo: '#42a5f5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
