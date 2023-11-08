/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f37c9",
        accent: "#4cc9f0",
        mouseIn: "#4cc9f0",
        mouseOut: "#5850e6",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
