const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/safelist.txt'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ["'Fira Sans'", 'sans-serif'],
      'stencil':  ["siruca", 'sans-serif'],
    },
    extend: {
      fontSize: {
        '12xl': ['200px', '1'],
        '15xl': ['250px', '1']
      },
      colors: {
        violet: {
          light: '#F3E8FF',
          base: '#700BA2',
          dark: '#511472',
        },
        rose: {
          light: '#FCE7F3',
          base: '#C11F84',
          dark: '#931161',
        },
        jaune: {
          light: '#FEF3C7',
          base: '#EAA10F',
          dark: '#B77D08',
        },
        orange: {
          light: '#FFEDD5',
          base: '#EA580C',
          dark: '#BF4D00',
        },
        bleu: {
          light: '#CFFAFE',
          base: '#00ABE0',
          dark: '#00597C',
        },
        vert: {
          light: '#ECFCCB',
          base: '#9ABA00',
          dark: '#166534',
        },
        teal: {
          light: '#F0FDFA',
          base: '#10C9C3',
          dark: '#07726F',
        },
        rouge: {
          light: '#FEE2E2',
          base: '#E33232',
          dark: '#8F0909',
        },
        cci: {
          light: '#E0E7FF',
          base: '#373CF5',
          dark: '#000099',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
