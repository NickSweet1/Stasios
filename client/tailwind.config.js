/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //color accents
      colors: {
        sred: "#CE2B37", //stasios red
        sgreen: "#019246", //stasios green
      },
    },
  },
  plugins: [],
};
