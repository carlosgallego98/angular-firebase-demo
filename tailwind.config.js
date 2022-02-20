module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
  ],
  theme: {
    // screens: {
    //   xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    //   sm: { min: '576px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    //   md: { min: '898px' }, // Tablet (matches max: iPad Pro @ 1112px).
    //   lg: { min: '1200px' }, // Desktop smallest.
    //   xl: { min: '1159px' }, // Desktop wide.
    //   xxl: { min: '1359px' } // Desktop widescreen.
    // },
    fontFamily: {
      'nunito': 'Nunito'
    },
    extend: {
      transitionProperty: {
        'width': 'width',
        'display': 'display',
      },
      transitionTimingFunction: {
        elastic: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      colors: {
        'body': '#293241',
        'brand': {
          DEFAULT: '#69D981',
          '50': '#FBFEFC',
          '100': '#EBFAEE',
          '200': '#CAF2D3',
          '300': '#AAE9B7',
          '400': '#89E19C',
          '500': '#69D981',
          '600': '#3CCD5B',
          '700': '#2AA745',
          '800': '#1F7A33',
          '900': '#144D20'
        },
      }
    },
  },
  plugins: [],
}
