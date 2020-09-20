const { colors, screens } = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    outline: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        highlight: colors.orange['700'],
        primary: colors.teal['500'],
        'primary-dark': colors.teal['600'],
        'primary-light': colors.teal['400'],
        secondary: colors.pink['600'],
        'secondary-dark': colors.pink['700'],
        'secondary-light': colors.pink['500'],
      },
    },
    inset: {
      '1/2': '50%',
    },
    screens: {
      ...screens,
      xs: { max: '767px' },
    },
  },
  variants: {
    textColor: ['group-hover', 'hover'],
    visibility: ['group-hover', 'hover'],
  },
}
