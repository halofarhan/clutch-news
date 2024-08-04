/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'bebas' : ['bebas', 'sans-serif'],
        'fontColour' : '#06a54b'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}