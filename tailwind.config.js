/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { min: "0px", max: "768px" },
      // => @media (min-width: 0px and max-width: 479px) { ... }

      tablet: { min: "768px", max: "991px" },
      // => @media (min-width: 480px and max-width: 991px) { ... }

      netbook: { min: "992px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      pc: { min: "1025px" },
      // => @media (min-width: 1025px) { ... }
    },
    extend: [],
  },
  plugins: [],
};
