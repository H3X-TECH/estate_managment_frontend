const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      // themes: {
      //   light: {
      //     colors: {
      //       primary: "#7c3aed",
      //     },
      //   },p
      //   dark: {
      //     colors: {
      //       primary: "#7c3aed",
      //     },
      //   },
      // },
    }),
  ],
};
