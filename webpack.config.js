var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src") + "/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
