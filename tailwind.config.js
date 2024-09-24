// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

// module.exports = {
//   content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
