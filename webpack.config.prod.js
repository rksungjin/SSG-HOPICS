var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var cssnano = require('cssnano');

module.exports = {
  entry: {
    app: [
      './app/app.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ]
  },

  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel",
        query: {
          plugins: ["transform-class-properties"],
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]

        }
      },
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.(png|jpg|jpeg)$/, loader: 'url-loader'}
    ]
  },
};