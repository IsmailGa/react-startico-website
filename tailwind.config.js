/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily :{
        'fraunces': 'Fraunces',
        'space grotesk': 'Space-grotesk'
      },
      colors: {
        // Configure your color palette here
        'dark': '#162E3C',
        'light': '#DDF0A7',
      },
    },
    
  },
  plugins: [],
}
