/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#ffc000",
        customGreen: "#00514B",
      },
    },
  },
  plugins: [],
}

