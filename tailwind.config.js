module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
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
        'light-secondary-color2':'#F9F7FF',
        'light-primary-color': '#967EF9',
        'background-color': '#FFFFFF',
        'heading-color': '#000000',
        'btn-color':'#F778BA',
        'dark-grey':'#B7B5B5',
        'light-pink':'#e9e3ff',
        'light-grey':'#d3cde6',
        'light-yellow':'#EBEBEB',
        'default':'#F0ECFF'

        
       
      },
      
    },
  },
  variants: {
    extend: {},
  },
};
