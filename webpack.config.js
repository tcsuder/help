// differences in scope between the first and second require statement. Not completely clear on why
var webpack = require("webpack");
const { resolve } = require('path');

module.exports = {
  // root JS file... or starting point for the app
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],
  // the location and file name of our js files after being transpiled and concatinated
  output: {
    path: resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  // additional configuration points for HMR
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build')
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
        // configuration of babel transpiler. modules false tells webpack to rewrite module content into build folder on change
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.html$/,
        // loader originally included additional substring '!extract-loader!html-loader'... these packages deal with compiling HTML with scripts and image elements, which we don't have
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  // resolves file names without js or jsx extensions in component imports
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
