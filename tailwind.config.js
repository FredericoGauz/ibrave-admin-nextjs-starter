const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const windmill = require('@windmill/react-ui/config');
module.exports = windmill({
    purge: {
        content: ['./src/**/*.{js,ts,jsx,tsx}'],
    },
    theme: {
        fontFamily: {
            sans: ['Inter', ...fontFamily.sans],
        },
        extend: {
            colors: {
                violet: colors.violet,
            },
            boxShadow: {
                bottom:
                    '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
});

/**
 * === Already Included Colors ===
 * gray: coolGray
 * red: red
 * yellow: amber
 * green: emerald
 * blue: blue
 * indigo: indigo
 * purple: violet
 * pink: pink
 */

/**
 * === All Colors ===
 * blueGray
 * coolGray
 * gray
 * trueGray
 * warnGray
 * red
 * orange
 * amber
 * yellow
 * lime
 * green
 * emerald
 * teal
 * cyan
 * lightBlue
 * blue
 * indigo
 * violet
 * purple
 * fuchsia
 * pink
 * rose
 */
