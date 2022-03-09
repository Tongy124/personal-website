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

      "salmon": "#EE9CC1",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
