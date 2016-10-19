var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        hello: path.join(__dirname, 'src', 'list.js'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "list.js"
    },
    devServer: {
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;