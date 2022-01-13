module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainTodo: {
          50: "#F0ECFF",
          100: "#F9F7FF",
          200: "#6D4AFC",
          300: "#F778BA",
          400: "#EAE4FF",
          500: "#EBEBEB",
          600: "#B7B5B5 ",
          700: "#d3cde6 ",
          800: "#e9e3ff ",
          900: "#de6ca7 ",
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
      },
    },
  },
  variants: {
    extend: {},
  },
};
