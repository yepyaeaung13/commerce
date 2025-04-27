module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths based on your project structure
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: '#004E50',
                secondaryColor: '#F2F6F5',
                tertiaryColor: '#A4FF6E',
                accentColor: '#00452C',
                grayCardColor: '#F3F6F5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                "IBM-Plex-Mono": ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};