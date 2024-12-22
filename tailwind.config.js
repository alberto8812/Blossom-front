/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Primary_100: '#EEE3FF',
          Primary_600: '#3B82F6',  
          Primary_700: '#5A3696',   
        },
        secondary: {
          Secondary_600: '#63D838',
        },
      },
    },
  },
  plugins: [],
}