const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    nextui({
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
