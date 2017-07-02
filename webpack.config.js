'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',

  entry: ['src/index.js'],

  output: {
    path: path.resolve(__dirname, "src/dist"),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: ['web_modules', 'node_modules', 'client', 'js'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    loaders: [
      { 
        exclude: /(node_modules|bower_components)/,
        text: /\.js$/, 
        loader: 'babel-loader',
      },
      { test: /\.jsx?$/, 
        loaders: ['babel'], 
        exclude: /node_modules/ 
      }
    ],

  }
};