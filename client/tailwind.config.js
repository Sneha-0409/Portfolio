

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // A deep, dark blue for the main background
                'background-dark': '#095f6aff',
                // A slightly lighter indigo for the gradient
                'background-light': '#0c7a7eff',
                // A vibrant magenta for accents, buttons, and links
                'accent': '#6ce8ecff',
            },
        },
    },
    plugins: [],
}