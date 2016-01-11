"use strict";

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index_bundle:['./src/index.jsx']
    },
    resolve:{
        fallback: '/usr/local/lib/node_modules'
    },
    output: {
        filename: './dist/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=react,presets[]=es2015'] // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.sass$/,
                loaders: ['style','css','sass?indentedSyntax']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({inject:'body',template: './src/helper/html-webpack-plugin-template.html'})
    ]
};