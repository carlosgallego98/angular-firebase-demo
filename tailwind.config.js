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
                'body': '##141115',
                'white-bg': '#e8e4f1',
                'brand': {
                    DEFAULT: '#8447FF',
                    '50': '#FFFFFF',
                    '100': '#F1EAFF',
                    '200': '#D6C1FF',
                    '300': '#BB99FF',
                    '400': '#9F70FF',
                    '500': '#8447FF',
                    '600': '#5E0FFF',
                    '700': '#4700D6',
                    '800': '#34009E',
                    '900': '#220066'
                },
            }
        },
    },
    plugins: [],
}