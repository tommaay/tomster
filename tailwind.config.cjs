/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito sSans", "sans-sarif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "base-grey": "var(--grey-text)",
        divider: "var(--divider)",
        "footer-bg": "#F1F1F1",
      },
    },
  },
  plugins: [],
};
