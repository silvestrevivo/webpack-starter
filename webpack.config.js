var path = require('path');
//module path require to load the local sever with node

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/js/index.js',
    //entry point to compile and create bundle

    output: {
        path: path.resolve(__dirname, 'dist'),
        //path to output
        filename: 'bundle.js',
        //this is the result, bundle.js
        publicPath: ''
        //public folder
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                    //loaders included
                    //for react => $ npm install react react-dom
                }
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
                //css/sass loader to import all type style files
            }
        ]
    },
    devServer: {
      //here comes the configuration of the server
      contentBase: path.join(__dirname, "dist"),
      //from this url is read the site
      compress: true,
      //type of compression
      port: 1234,
      //port to see on the browser
      stats: 'errors-only'
      //outprint in the terminal just the errors
    }
};
