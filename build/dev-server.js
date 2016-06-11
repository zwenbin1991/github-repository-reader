// webpack开发服务器
// 曾文彬
// 2016-6-11

'use strict';

var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config');

// 创建express实例
var app = express();

// 传入配置参数生成webpack编译器
var compiler = webpack(webpackConfig);

// 调用webpack-dev-middleware中间件
var devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// 调用webpack-hot-middleware中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// 当webpack-hot-middleware编译完成后，监听html修改事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, callback) {
        // 触发浏览器刷新事件
        hotMiddleware.publish({ action: 'reload' });
        callback();
    });
});

// 注册成为express中间件
app.use(devMiddleWare);
app.use(hotMiddleware);

// 监听端口，启动web服务
app.listen(7878, function () {
    console.log('服务器创建http://localhost:7878');
});