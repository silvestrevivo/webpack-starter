const path = require('path');
// Module path require to define entry and out point, as well as public folder

module.exports = {
  // Entry point to compile and create bundle
  entry: path.resolve(__dirname, 'src') + '/js/index.js',

  // Outpoint to compile in bundle.js all the files
  output: {
      path: path.resolve(__dirname, 'dist'),
      // Path to output
      filename: 'bundle.js',
      // This is the result, bundle.js
      publicPath: '/dist'
      // Public folder
  },

  module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
}
