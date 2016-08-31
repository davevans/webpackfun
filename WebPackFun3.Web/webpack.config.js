var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry:{
        app : "./src/app.js",
        vendor: ["jquery", "bootstrap/dist/js/bootstrap.js"]
    }, 
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
     plugins: [
         new HtmlWebpackPlugin({
             filename: 'index.html',
             template: "src/index.html"
         }),
         new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};