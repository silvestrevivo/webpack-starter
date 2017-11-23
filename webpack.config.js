const webpack = require('webpack');
// Module to provide plugins by default, in this case jQuery
const path = require('path');
// Module path require to define entry and out point, as well as public folder
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Plugin to create a bundle css apart of javascript
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// Sincrinizing devices to check the site

module.exports = {
    // Entry point to compile and create bundle
    entry: `${path.resolve(__dirname, 'src')}/js/index.js`,

    // Outpoint to compile in bundle.js all the files
    output: {
        path: path.join(__dirname, 'dist'),
        // Path to output
        filename: 'bundle.js',
        // This is the result, bundle.js
        publicPath: '/',
        // Where the files are available in the server
    },

    devtool: 'inline-source-map',
    // Tool to map Sass and javascript

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
    },
    // Webpack Server

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'postcss-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                }),
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?[\s\S]+)?$/,
                use: 'file-loader?name=bgimages/[name].[ext]',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        // Name of the css bundle compiled in the './dist/ folder
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
        }),
    ],
};
