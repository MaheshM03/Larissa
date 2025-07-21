/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // 👈 This tells Tailwind to scan your React code
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
