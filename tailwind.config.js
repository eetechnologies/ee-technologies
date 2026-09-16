/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10236B",
          ink: "#0A1533",
          light: "#1E3A9E",
        },
        orange: {
          DEFAULT: "#E2680F",
          dark: "#B84F09",
          light: "#F5924A",
        },
        spark: "#D6127E",
        paper: "#F7F6F2",
        ink: "#16181D",
        line: "#E4E1D8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
