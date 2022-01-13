module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
        //   50: "#F0ECFF",
        //   100: "#F9F7FF",
        //   200: "#6D4AFC",
        //   300: "#F778BA",
        //   400: "#EAE4FF",
        //   500: "#EBEBEB",
        //   600: "#B7B5B5 ",
        //   700: "#d3cde6 ",
        //   800: "#e9e3ff ",
        //   900: "#de6ca7 ",
       
        test:
          " var(--test)"
        
      },
    },
  },
  variants: {
    extend: {},
  },
};
