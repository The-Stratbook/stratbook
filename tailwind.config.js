/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C121C',
        primary: '#FFD02F',
        secondary: '#00C2CB',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"]
  },
}