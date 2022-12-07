/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryA: "#1976D2",
      primary_hover: "#744fe3",
      beije: "#F1948A",
      initial: "rgb(168, 50, 121, 0.9)",
      finally: "rgb(211, 131, 18, 0.8)",
      danger: "#EF5350",
      successfull: "#229954",
      dark: "rgb(31 41 55 / 0.8)",
      light: "rgba(230, 230, 230, 0.5)",
      glass: "rgba(255, 255, 255, 0.1)",
      dark_light: "rgb(0 0 0 / 0.2)",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
