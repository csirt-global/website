const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./code/*.html",
    "./code/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#444343',
          800: '#2d2d2d',
          900: '#1d1d1b',
        },
        yellow: {
          500: '#f6e714',
          700: '#d8ca0b',
          900: '#b0a403',
        },
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        yellow: {
          css: {
            '--tw-prose-body': theme('colors.yellow[800]'),
            '--tw-prose-headings': theme('colors.yellow[500]'),
            '--tw-prose-lead': theme('colors.yellow[700]'),
            '--tw-prose-links': theme('colors.yellow[900]'),
            '--tw-prose-bold': theme('colors.yellow[900]'),
            '--tw-prose-counters': theme('colors.yellow[600]'),
            '--tw-prose-bullets': theme('colors.yellow[400]'),
            '--tw-prose-hr': theme('colors.yellow[300]'),
            '--tw-prose-quotes': theme('colors.yellow[900]'),
            '--tw-prose-quote-borders': theme('colors.yellow[300]'),
            '--tw-prose-captions': theme('colors.yellow[700]'),
            '--tw-prose-code': theme('colors.yellow[900]'),
            '--tw-prose-pre-code': theme('colors.yellow[100]'),
            '--tw-prose-pre-bg': theme('colors.yellow[900]'),
            '--tw-prose-th-borders': theme('colors.yellow[300]'),
            '--tw-prose-td-borders': theme('colors.yellow[200]'),
            '--tw-prose-invert-body': theme('colors.yellow[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.yellow[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.yellow[400]'),
            '--tw-prose-invert-bullets': theme('colors.yellow[600]'),
            '--tw-prose-invert-hr': theme('colors.yellow[700]'),
            '--tw-prose-invert-quotes': theme('colors.yellow[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.yellow[700]'),
            '--tw-prose-invert-captions': theme('colors.yellow[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.yellow[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.yellow[600]'),
            '--tw-prose-invert-td-borders': theme('colors.yellow[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
