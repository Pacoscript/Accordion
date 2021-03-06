const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' })
    ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
