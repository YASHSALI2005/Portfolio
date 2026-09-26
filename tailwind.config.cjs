/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        display: ['"Bricolage Grotesque"', "sans-serif"],
        pixel: ['"Pixelify Sans"', "monospace"],
        mono: ['"Geist Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
