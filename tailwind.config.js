/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          from: {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s forwards",
        "fade-in-left": "fadeInLeft 1s forwards",
      },
      boxShadow: {
        noteShadow: "-10px 10px 4px 0px rgba(0,0,0,0.25)",
        inputShadow: "-2px 4px 2px 0px rgba(0,0,0,0.25)",
      },
    },
    fontFamily: {
      h1: ["Calistoga"],
      h2: ["Calistoga"],
      body: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
