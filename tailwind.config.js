module.exports = {
  purge: [
    './dist/*.html',
    './dist/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '22': '4.5rem'
      },
      maxWidth: {
        'max-w-460': '460px' 
      },
      screens: {
        'slider' : '960px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
