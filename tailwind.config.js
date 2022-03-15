module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      blurple: "#400FDF",
      blurpledim: "#3C0ED4",
      blurpledark: "#390EC5",
      blurpledarker: "#270989",

      "salmon": "#6EBF8B",

      "backgroundcolour": "#F3F3F3"
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
