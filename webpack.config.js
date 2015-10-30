const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [{
  context: __dirname,

  entry: './index.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // Get that css
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[local]')
      },
      // so modern man
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0', include: [/node_modules\/hudl-.*/, path.resolve(__dirname + '/')] }
    ],
    preLoaders: [
      { test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
}, {
  context: __dirname,

  entry: './index.server.js',

  output: {
    path: __dirname + '/public',
    filename: '_server.js',
    libraryTarget: 'commonjs',
    library: 'vi',
  },

  module: {
    loaders: [
      // Get that css
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[local]')
      },
      // so modern man
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0' }
    ],
  },

  resolve: {
    alias: {
      'hudl-video-playback': path.resolve('./vendor/videoplayback-override'),
    },
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
}];
