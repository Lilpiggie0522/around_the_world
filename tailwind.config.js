/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}

