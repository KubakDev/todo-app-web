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
        tertiaryColor: "var(--color-tertiary)",
        tertiaryColorShade: "var(--color-tertiary-shade)",
        tertiaryColorTint: "var(--color-tertiary-tint)",
        quaternaryColor: "var(--color-quaternary)",
        quaternaryColorShade: "var(--color-quaternary-shade)",
        quaternaryColorTint: "var(--color-quaternary-tint)",
        backgroundColor: "var(--color-background)",
        foregroundColor: "var(--color-foreground)",
        // //   50: "#F0ECFF",
        // //   100: "#F9F7FF",
        // //   200: "#6D4AFC",
        // //   300: "#F778BA",
        // //   400: "#EAE4FF",
        // //   500: "#EBEBEB",
        // //   600: "#B7B5B5 ",
        // //   700: "#d3cde6 ",
        // //   800: "#e9e3ff ",
        // //   900: "#de6ca7 ",
        // test:
        //   " var(--test)"
        // successColor: "var(--color-success)",
        // warningColor: "var(--color-warning)",
        // dangerColor: "var(--color-danger)",
        // primaryColor: "var(--color-primary)",
        // primaryColorShade: "var(--color-primary-shade)",
        // primaryColorTint: "var(--color-primary-tint)",
        // secondaryColor: "var(--color-secondary)",
        // secondaryColorShade: "var(--color-secondary-shade)",
        // secondaryColorTint: "var(--color-secondary-tint)",
        // tertiaryColor: "var(--color-tertiary)",
        // tertiaryColorShade: "var(--color-tertiary-shade)",
        // tertiaryColorTint: "var(--color-tertiary-tint)",
        // quaternaryColor: "var(--color-quaternary)",
        // quaternaryColorShade: "var(--color-quaternary-shade)",
        // quaternaryColorTint: "var(--color-quaternary-tint)",
        // backgroundColor: "var(--color-background)",
        // foregroundColor: "var(--color-foreground)",
        // foregroundColorTint:"var(--color-foreground-tint)",
        // foregroundColorText:"var(--color-foreground-contrast)"
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        backgroundColor: "var(--color-background)",
        quatenaryColor: "var(--color-quatenary)",
        lightPrimaryColor: "var(--color-light-primary)",
        lightSecondaryColor: "var(--color-light-secondary)",
        lightColor: "var(--color-light)",
        cardBackgroundColor: "var( --color-card-background)",
        TextBoldColor: "var(--color-text-bold)",
        btnLightBgColor: "var(--color-btn-light-bg)",
        textPrimaryColor: "var(--color-text-primary)",
        DayBackgroundColor: "var(--color-day-background)",
        calenderBackgroundColor: "var(--color-calender-background)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
