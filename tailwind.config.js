module.exports = {
  mode: 'jit',
  purge: ['index.html', './pages/**/*.js', './components/**/*.js', './styles/safelist.txt'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ["'Inter'", 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
