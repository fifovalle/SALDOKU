/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customBg: "#08363B",
        customBg2: "#D1EFEE",
        customBg3: "#020E0F",
      },
    },
  },
  plugins: [],
};
