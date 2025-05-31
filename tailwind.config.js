/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // your React components
    "./node_modules/flowbite/**/*.js", // include Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // enable Flowbite plugin
    require("tailwind-scrollbar"),
  ],
};
