module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
<<<<<<< Updated upstream
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
        },
=======
    fontSize: {
      lg: '64px',
      sm: '24px',
      md: '30px'
    },
    borderRadius:{
   lg:'250px',
   sm:'40px'
    },
    extend: {
      colors: {
        'primary-color': '#6D4AFC',
        'secondary-color': '#EAE4FF',
        'light-secondary-color': '#F9F8FF',
        'light-primary-color': '#967EF9',
        'background-color': '#FFFFFF',
        'heading-color': '#000000'
>>>>>>> Stashed changes
      },
    },
  },
  variants: {
    extend: {},
  },
};
