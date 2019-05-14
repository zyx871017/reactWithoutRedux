const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
});