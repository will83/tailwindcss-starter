module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/safelist.txt'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      // 'sans': ["'Fira Sans'", 'sans-serif'],
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
