"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index_bundle:['webpack/hot/dev-server','./src/index.js']
    },
    resolve:{
        fallback: '/usr/local/lib/node_modules'
    },
    output: {
        filename: './dist/bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({inject:'body'})]
};