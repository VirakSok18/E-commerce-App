/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#ff8c42',
          500: '#ff6b35',
          600: '#e85924',
          700: '#c2410c',
        },
        navy: {
          800: '#2c3e50',
          900: '#1e293b',
          950: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}
