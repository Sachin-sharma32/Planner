/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5364FF",
        pink: "#FBEBF1",
        purple: "#E9E8FD",
        yellow: "#FFFBDA",
        green: "#CFFFF1",
        pinkTextColor: "#D16D9A",
        purpleTextColor: "#938BE6",
        yellowTextColor: "#E7C546",
        greenTextColor: "#02B683",
        textLightShade: "#AAAAAA",
        textBlack: "#000000",
        textWhite: "#ffffff",
        lightGray:"#dcdcdc"
      },
      fontSize: {
        large: "16px",
        largest: "20px",
        medium: "13px",
        small: "10px",
      },
      fontWeight: {
        thin: "400",
        normal: "500",
        semiBold: "600",
        bold: "700",
      },
      fontFamily: {
        nunitoRegular: "NunitoRegular",
        nunitoMedium: "NunitoMedium",
        nunitoBold: "NunitoBold",
        nunitoExtraBold: "NunitoExtraBold",
      },
    },
  },
  plugins: [],
};
