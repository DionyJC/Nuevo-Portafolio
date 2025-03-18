/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        "rebeye": "Ribeye Marrow",
        "concert":"Concert One"
      }
    },
  },
  plugins: [],
}