const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'server',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /\node_modules/,
        use: 'css-loader/locals'
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  entry: path.resolve(__dirname, '../server/render.js'),
}
