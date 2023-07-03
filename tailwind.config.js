/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#012c3b",
        black: "#000",
        white: "#fff",
        darkgray: "#a7a7a7",
        seagreen: "#0f6936",
        gray: {
          "100": "#1b1b1c",
          "200": "#011736",
          "300": "rgba(255, 255, 255, 0.7)",
          "400": "rgba(255, 255, 255, 0.3)",
          "500": "rgba(255, 255, 255, 0.65)",
          "600": "rgba(255, 255, 255, 0.9)",
        },
        whitesmoke: "#eee",
        slategray: {
          "100": "#3b6f82",
          "200": "#3a6d81",
        },
        mediumseagreen: "#18c15c",
        "gray-3": "#828282",
        mediumblue: "#313ef7",
      },
      fontFamily: {
        montserrat: "Montserrat",
        metropolis: "Metropolis",
        rubik: "Rubik",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        lgi: "19px",
        "11xl": "30px",
        "37xl": "56px",
        "131xl": "150px",
        "166xl": "185px",
        "181xl": "200px",
        "194xl": "213px",
        "51xl": "70px",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "3xs": "10px",
      xl: "20px",
      "6xl": "25px",
    },
  },
  plugins: [require("daisyui")]
}

