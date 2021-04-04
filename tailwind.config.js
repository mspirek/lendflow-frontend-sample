module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        github: {
          gray: '#24292e',
          blue: '#0366d6',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
