/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        heading: ["Geologica", "sans-serif"],
        primary : ["Inter" , "sans-serif"]
      },
      colors: {
        primary: "#1192d3",
        dark: "#3a4856",
        light: "#e5e5e5",
        accent: "#2fe0ac",
        white: "#ffffff",
        "dark-primary": "#002659",
        warning: "#e59d23",
      },
    },
  },
  plugins: [],
};
