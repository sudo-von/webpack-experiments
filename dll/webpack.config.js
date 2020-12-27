const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCSsExtractPlugin = require('mini-css-extract-plugin');

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
                    { loader: MiniCSsExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: MiniCSsExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCSsExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
            ,            {
                test: /\.css$/,
                use: [
                    { loader: MiniCSsExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
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
        new MiniCSsExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-deserver',
            template: path.resolve(__dirname,'index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}