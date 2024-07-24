/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/vue-tailwind-datepicker/**/*.js"],
  container: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

