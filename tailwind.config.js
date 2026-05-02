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
          DEFAULT: '#1E1C2F',
          dark: '#161424',
          light: '#2D2B44',
        },
        accent: {
          purple: '#3E0866',
          plum: '#2D1E36',
          vibrant: '#501A5E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
