const { webpack } = require("webpack");
const { resolve } = require('path');

module.exports = {
  // root JS file... or starting point for the app
  entry: [
    resolve(__dirname, "src") + "/index.jsx",
    resolve(__dirname) + "/index.html",
  ],
  // the location and file name of our js files after being transpiled and concatinated
  output: {
    path: resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  // what kind of transformations do we want webpack to enact on our code?
  module: {
    rules: [
      {
        // a regular expression that searches for files with a certain syntactical pattern
        test: /\.jsx?$/,
        // exclude files that match the test but should not be transpiled
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        // loader originally included additional substring '!extract-loader!html-loader'
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  // resolves file names without js or jsx extensions in component imports
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
