/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input).js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "business"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"), nextui()],
};
