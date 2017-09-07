var path = require('path');
//module path require to load the local sever with node

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/js/index.js',
    //entry point to compile and create bundle
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
        //this is the result, bundle.js
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
    }
};
