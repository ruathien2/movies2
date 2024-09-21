/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "rgb(246 38 93)",
      },
      border: {
        image: "fill 0 linear-gradient(#0001, #000)",
      },
    },
  },
  plugins: [],
};
