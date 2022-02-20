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
        "brand-dark": {
          DEFAULT: "#285943",
          "50": "#E6F4EE",
          "100": "#CAE7DA",
          "200": "#95D0B5",
          "300": "#61B891",
          "400": "#3F8D6A",
          "500": "#285943",
          "600": "#204635",
          "700": "#183528",
          "800": "#10231A",
          "900": "#08120D"
        },
        "brand": {
          DEFAULT: "#8CD790",
          "50": "#F4FBF4",
          "100": "#E8F7E9",
          "200": "#D2EFD3",
          "300": "#BBE7BD",
          "400": "#A4DFA7",
          "500": "#8CD790",
          "600": "#58C55E",
          "700": "#379F3C",
          "800": "#256A28",
          "900": "#123514"
        }
      }
    },
  },
  plugins: [],
}
