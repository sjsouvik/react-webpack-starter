const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React webpack starter",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  devServer: { port: 6378, open: true, static: ["/build"] },

  mode: "development",
};

module.exports = webpackConfig;
