var path = require('path');
var webpack = require('webpack')

var config = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
};

module.exports = config;