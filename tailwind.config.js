/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Hero.jsx",
    "./src/App.jsx",
    "./src/components/MyServices.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        imbue: ['Imbue', 'serif'],
        humane: ['Humane', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

