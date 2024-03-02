/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                "rich-black": "#101119",
                "light-cyan": "#E0FBFC",
            },
            backgroundImage: {
                "gradient-175": `linear-gradient(157deg, #101119 18%, rgba(9,31,52,1) 55%,  #101119 86%)`,
            },
        },
    },
    plugins: [],
};
