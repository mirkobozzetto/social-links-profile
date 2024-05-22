/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: "hsl(0, 0%, 20%)",
        darkgrey: "hsl(0, 0%, 12%)",
        black: "hsl(0, 0%, 8%)",
        green: "hsl(75, 94%, 57%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        p: "14px",
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
