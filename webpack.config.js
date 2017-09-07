var path = require('path');
  //importamos el paquete path para la referencia de nuestras URL's

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    //especificamos donde es nuestro archivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
        //esta es la salida
    },
    module: {
      //esto son los modulos de CSS para compilar en forma de JavaScript
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
