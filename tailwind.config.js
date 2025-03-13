/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDB813", // Based on the color from the screenshots
        secondary: "#202020",
        background: "#F8F8F8",
        textColor: "#333",
      },
    },
  },
  plugins: [],
};
