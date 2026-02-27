/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0a0a0a",
          light: "#fdfbf7",
        },
        primary: {
          dark: "#000000",
          light: "#ffffff",
        },
        secondary: "#5c5c5c",
        accent: "#b49b82", // Tan/Beige luxury accent
        surface: "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.05em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
