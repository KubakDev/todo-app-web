
module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,js}"],
  },
  content: ["./node_modules/@themesberg/flowbite/**/*.js"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      lg: "55px",
      sm: "24px",
      md: "30px",
      xsm: "20px",
      xmd: "45px",
    },
    borderRadius: {
      lg: "250px",
      sm: "40px",
      xsm: "20px",
    },
    extend: {
      colors: {
        themes: {
          main: "#6D4AFC",
          pink: "#55B4B2",
          blue: "#353652",
          dark: "#000000",
        },
        successColor: "var(--color-success)",
        warningColor: "var(--color-warning)",
        dangerColor: "var(--color-danger)",
        primaryColor: "var(--color-primary)",
        primaryColorShade: "var(--color-primary-shade)",
        primaryColorTint: "var(--color-primary-tint)",
        secondaryColor: "var(--color-secondary)",
        secondaryColorShade: "var(--color-secondary-shade)",
        secondaryColorTint: "var(--color-secondary-tint)",
        
        greyTextBtn:"#B7B5B5",
        greyBackgroundBtn:"#EBEBEB",
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        backgroundColor: "var(--color-background)",
        quatenaryColor: "var(--color-quatenary)",
        lightPrimaryColor: "var(--color-light-primary)",
        lightColor: "var(--color-light)",
        cardBackgroundColor: "var( --color-card-background)",
        TextBoldColor: "var(--color-text-bold)",
        btnLightBgColor: "var(--color-btn-light-bg)",
        textPrimaryColor: "var(--color-text-primary)",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require("@themesberg/flowbite/plugin")],
};
