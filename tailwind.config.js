module.exports = {
  content: ["./public/**/*.{html,js}"],
  purge: [
    "./public/**/*.{html,js}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wav': 'url(../img/wav.png)'
      }),
      screens:{
        'xsm': '320px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}
