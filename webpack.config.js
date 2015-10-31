const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

// PostCSS Plugins
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');

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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      // so modern man
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0', include: [/node_modules\/hudl-.*/, path.resolve(__dirname + '/')] }
    ],
    preLoaders: [
      { test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    mixins
  ],

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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      },
      // so modern man
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0' }
    ],
  },

  resolve: {
    alias: {
      'kickoff': path.resolve('./lib/kickoff'),
    },
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    mixins
  ],

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
}];
