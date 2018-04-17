const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        // postcss-loader should be placed after css-loader and style-loader but
                        // before sass|scss|less loaders 
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Generated HTML'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.DefinePlugin(GLOBALS), // Enabled by mode: 'production'
        // extractSass
        new ExtractTextPlugin('style.css'),
        // new webpack.optimize.DedupePlugin(), // Removed from webpack > v.4
        // new webpack.optimize.UglifyJsPlugin() // Enabled by mode: 'production'
    ]
};