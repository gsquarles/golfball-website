/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-seriff"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D8B3D",
        },
        secondary: {
          DEFAULT: "#F0C808",
        },
      },
    },
  },
  plugins: [],
};
