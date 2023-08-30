/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-sarif", ...defaultTheme.fontFamily.sans],
        kanit: ["Kanit", "sans-sarif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#151C3A",
        base: "#222222",
      },
    },
  },
  plugins: [],
};
