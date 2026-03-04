/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050510",
        cyan: {
          neon: "#00f3ff",
          dark: "#0088aa"
        },
        blue: {
          electric: "#0066ff",
          deep: "#001133"
        }
      },
      backgroundImage: {
        'scan-lines': 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0, 243, 255, 0.05) 50%, rgba(0, 243, 255, 0.05))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}