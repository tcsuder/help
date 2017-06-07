const { webpack } = require("webpack");
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, "src") + "/index.jsx",
  output: {
    path: resolve(__dirname, "build"),
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
