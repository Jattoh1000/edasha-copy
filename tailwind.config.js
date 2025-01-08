/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        phone: 'url("/image of phone with hand.png")',
        fotterImg: 'url("/footerimg.png")',
        bgImg: 'url("/bgimgblue.png")',
      },
    },
  },
  plugins: [],
};
