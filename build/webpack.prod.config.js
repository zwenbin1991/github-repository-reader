// webpack生产环境配置文件
// 曾文彬
// 2016-6-11

'use strict';

var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

// 引入webpack基本配置
var webpackConfig = require('./webpack.config');

webpackConfig.vue = {
    loaders: {
        css: extractTextWebpackPlugin.extract('css')
    }
};

(webpackConfig.plugins || (webpackConfig.plugins = [])).push(
    // 提取css为单独文件
    new extractTextWebpackPlugin('[name].[contenthash].css'),

    // 压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = webpackConfig;