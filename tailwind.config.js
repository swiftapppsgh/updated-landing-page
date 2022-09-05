/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: "#101729",
            white: "#FFFFFF",
            black: "#000000",
            graybg: "#F5F6F860",
            red: "#ACFE14",
            darkRed: "#A80520",
            darkgray: "#808286",
            darkblueopacity: "#2D194E10",
            purple: "#5C1D62",
        },
        extend: {
            backgroundImage: {
                background:
                    "url('https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386649/background_lt4rmf.png')",
                backgroundmobile:
                    "url('https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386650/backgroundmobile_xe1dz6.png')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
