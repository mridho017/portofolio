/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#002150",
        "blue": "#1340DF",
        "cyan": "#5CC2D8",
        "pink": "#EB01F0",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
