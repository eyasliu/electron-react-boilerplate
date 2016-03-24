/* eslint strict: 0 */
'use strict';
const webpack = require('webpack');
const path = require('path');

const alias = {
  common: path.join(__dirname, 'app/common'),
  cc: path.join(__dirname, 'app/common/components'),
  modules: path.join(__dirname, 'app/modules'),
  utils: path.join(__dirname, 'app/utils'),
  fw: path.join(__dirname, 'app/modules/framework'),
  blog: path.join(__dirname, 'app/modules/blog')
}

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};
