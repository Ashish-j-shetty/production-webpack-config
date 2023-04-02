const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devtool: "eval-source-map" ,  // to have reference to the source map
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),



    ],
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
};