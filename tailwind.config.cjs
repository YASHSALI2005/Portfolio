/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        display: ['"Hanken Grotesk"', "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
