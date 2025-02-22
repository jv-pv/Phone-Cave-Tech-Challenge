/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'blackOpaque': "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
