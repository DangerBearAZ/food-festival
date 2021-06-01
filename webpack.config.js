//We'll use a core Node.js module that we've used previously, called path. 
//Remember, webpack uses Node.js to build our application, so we can use npm modules and the require module.
const webpack = require("webpack")
const path = require('path'); 

//For a basic configuration, we need to provide webpack with three properties: entry, output, and mode.
module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  ],
  mode: "development"
};