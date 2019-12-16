const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    sw: path.resolve(__dirname, './', 'src/sw.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js/')
  }
};
