// webpack基础配置文件
// 曾文彬
// 2016-6-11

'use strict';

var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 打包入口文件
    entry: {
        app: path.resolve(__dirname, '../src/app.vue')
    },

    // 打包后的文件信息(路径、带hash文件名、)
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },

    // 解析模块文件配置参数
    resolve: {
        // 默认后缀名支持
        extensions: ['', '.js', '.vue', '.css']
    },

    // 加载器解析参数
    resolveLoader: {
        root: path.resolve(__dirname, '../node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.vue/,
                loader: 'vue'
            }, {
                test: /\.js/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.(jpg|png|gif|svg)/,
                loader: 'url',
                query: {
                    limit: 8204,
                    name: '[name].[hash].[ext]'
                }
            }
        ]
    },

    plugins: [
        // 创建自动引用打包后js文件的html
        new htmlWebpackPlugin({
            // 打包后的生成html文件名，现对于output path
            filename: 'index.html',

            // 打包前的html绝对路径
            template: path.resolve(__dirname, '../src/index.html'),

            inject: true
        }),

        // 热启动: 应用于开发环境下，监控目录或文件，有变化时自动打包、刷新浏览器，只更新修改的，提高构建的
    ]
};