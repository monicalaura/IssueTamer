/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#0fb7c7",
        accentDark: "#117f89",
        textDefault: "#e7e7e7",
        textNav: "#cfd1d1",
        textDark: "#2a2a2a",
        bgLight: "#d4d5d5",
        page: "#303030",
        pageLighter: "#515151",
        nav: "#272727",
        cardHover: "#414343",
      },
    },
  },
  plugins: [],
};
