const defaultTheme = require( 'tailwindcss/defaultTheme')


module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },

        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'),],
}