/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F051D",
        bgsecondary: "#3B3B3B",
        captiontext: "#B7B4BB",
        whiteText: "#FFF",
      },
      backgroundImage: {
        // Gradients
        gradient01: "linear-gradient(108deg, #342b98 13.57%, #4799c1 97.65%)",
        gradient02: "linear-gradient(62deg, #342b98 13.57%, #4799c1 97.65%)",
      },
    },
  },
  plugins: [],
};
