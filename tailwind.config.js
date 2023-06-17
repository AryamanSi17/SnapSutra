/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:["Satoshi","sans-serif"],
      inter:["Inter","san-serif"],
      fontSize: {
        'head': '3.5rem',
      },
    },
  },
  plugins: [],
}