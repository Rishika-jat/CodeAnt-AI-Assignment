module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px", // Set base font size to 16px
      },
      colors: {
        custumBlue: "#1570EF",
        custumBrown: "#414651",
        cream: "#FAFAFA",
        whiteGray:"#E9EAEB",
        gray:"#D5D7DA",
        darkblue:"#175CD3",
      HoverGray:"#F5F5F5",
      lavender:"#e6e3fd", 
      gray2:"#D8DAE5"
      },
    },
  },
  plugins: [],
};
