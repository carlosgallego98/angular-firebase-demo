module.exports = {
    content: [
        "./src/app/**/*.{html,ts}",
    ],
    theme: {
        screens: {
            xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
            sm: { min: '576px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
            md: { min: '898px' }, // Tablet (matches max: iPad Pro @ 1112px).
            lg: { min: '1200px' }, // Desktop smallest.
            xl: { min: '1159px' }, // Desktop wide.
            xxl: { min: '1359px' } // Desktop widescreen.
        },
        fontFamily: {
            'nunito': 'Nunito'
        },
        extend: {
            colors: {
                'body': '#293241',
                'brand': {
                    DEFAULT: '#EE6C4D',
                    '50': '#FEF6F5',
                    '100': '#FCE7E2',
                    '200': '#F9C8BD',
                    '300': '#F5AA97',
                    '400': '#F28B72',
                    '500': '#EE6C4D',
                    '600': '#E9421A',
                    '700': '#B93212',
                    '800': '#86240D',
                    '900': '#531608'
                },
            }
        },
    },
    plugins: [],
}