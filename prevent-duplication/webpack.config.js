const path = require('path');
const MiniCSsExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname,'src/js/index.js'),
        contact: path.resolve(__dirname,'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[name].js'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
            ,            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-deserver',
            template: path.resolve(__dirname,'index.html')
        })
    ],
    optimization : {
        splitChunks : {
            chunks : 'all',
            minSize : 0,
            name : 'commons'
        }
    } 
}