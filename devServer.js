const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack/webpack.dev.js');
const option = {
    contentBase: './dist',
    hot: true,
    host: '0.0.0.0'
};

webpackDevServer.addDevServerEntrypoints(config, option);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, option);

server.listen(50000, '0.0.0.0', function () {
    console.log('test app has running on port 50000! \n');
});