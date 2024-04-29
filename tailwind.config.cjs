/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#ffffff",
        accent: "#030303",
        searchbtn: "#1c62b9",
        lightblue: "#d3ecfb"
      },
    },
  },
  plugins: [],
}

