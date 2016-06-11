// webpack开发环境配置文件
// 曾文彬
// 2016-6-11

'use strict';

var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

// 引入webpack基本配置
var webpackConfig = require('./webpack.config');

// 添加热启动需要的entry参数
var devClient = './dev-client.js';

// 设置webpack服务器根目录
webpackConfig.output.publicPath = '/';

// 添加webpack热替换
(webpackConfig.plugin || (webpackConfig.plugins = [])).push(
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: true
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

Object.keys(webpackConfig.entry).forEach(function (name) {
    webpackConfig.entry[name] = devClient.split(' ').concat(webpackConfig.entry[name]);
});

module.exports = webpackConfig;

