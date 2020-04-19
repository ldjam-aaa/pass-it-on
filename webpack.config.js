const packagejson = require('./package.json');

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Specifically to import globals for Less
const fs = require('fs');
const less_prepend = fs.readFileSync(path.join(__dirname, 'frontend-src', 'globals.less'));


module.exports = {
    entry: {
        'index': path.join(__dirname, 'frontend-src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: '/'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['vue-style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'text-transform-loader',
                        options: {
                            prependText: less_prepend,
                        },
                    }],
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|png|woff|woff2|eot|ttf|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]',
                    outputPath: 'img',
                },
            },
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'frontend-src/static',
                to: ''
            }
        ]),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: packagejson.name,
            hash: true,
            template: 'frontend-src/index.ejs',
            inject: false,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
        }),
        new webpack.DefinePlugin({
            "APPLICATION_NAME": JSON.stringify(packagejson.full_name),
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue']
    }
};
