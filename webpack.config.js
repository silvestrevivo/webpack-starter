const path = require('path');
//module path require to define entry and out point, as well as public folder

module.exports = {

  entry: path.resolve(__dirname, 'src') + '/js/index.js',
  //entry point to compile and create bundle

  output: {
      path: path.resolve(__dirname, 'dist'),
      //path to output
      filename: 'bundle.js',
      //this is the result, bundle.js
      publicPath: '/dist'
      //public folder
  },

  module: {
        loaders: [
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
                //css/sass loader to import all type style files
            }
        ]
    },
}
