/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "sans-serif"],
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
      colors: {
        darkgray: {
          900: "#101010", // rgb(16, 16, 16)
          700: "#404040", // rgb(64, 64, 64)
        },
      },
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, #101010, #404040)",
      },
    },
  },
  plugins: [],
};
