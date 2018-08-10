module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  // output: {
  //   filename: "public/bundle.js"
  // },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },
  


  // This section desribes the transformations we will perform
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
          plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
              minimize: true,
              compress: {
              warnings: false
              }
            })
          ],
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]

        }
      },
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.(png|jpg|jpeg)$/, loader: 'url-loader'}
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "source-map"
  //eval-source-map
};
