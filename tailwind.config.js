module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
    // './node_modules/tw-elements/dist/js/**/*.js'
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
          DEFAULT: '#7A75D1',
          '50': '#FFFFFF',
          '100': '#F0EFFA',
          '200': '#D2D1F0',
          '300': '#B5B2E5',
          '400': '#9794DB',
          '500': '#7A75D1',
          '600': '#514BC3',
          '700': '#3B35A0',
          '800': '#2C2776',
          '900': '#1C194C'
        },
      }
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
}
