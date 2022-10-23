/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      body: "Roboto",
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-3%)" },
          "50%": { transform: "translateX(3%)" },
        },
      },
    },
  },
  plugins: [],
};
