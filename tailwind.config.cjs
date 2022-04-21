module.exports = {
    content: ["./src/**/*.{html,svelte,js,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                custom: {
                    titanium: "#283030",
                    "dark-theme": "#121212",
                    "dark-element": "#1d1d1d",
                    "dark-titanium": "#1e2323",
                    "steel-black": "#151919",
                    "soft-red": "#fb464d",
                    "light-pink": "#f55186",
                    pink: "#e02662"
                }
            }
        },
        fontFamily: {
            body: ["Inconsolata"],
            mono: ["Fira Code"]
        }
    },
    plugins: []
};
