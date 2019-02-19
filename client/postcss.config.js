const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    require("postcss-preset-env")(),
    require("postcss-easy-import"),
    tailwindcss("./tailwind.js"),
    require("autoprefixer")
  ]
};
