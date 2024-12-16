/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#f5f5f5',
        background: '#ffffff',
        foreground: '#000000',
      },
    },
  },
  plugins: [],
}

