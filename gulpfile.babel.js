// gulp配置文件
// 曾文彬
// 2016-6-11

'use strict';

import gulp from 'gulp';
import gWebpack from 'gulp-webpack';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

/**
 * 获取webpack配置对象
 *
 * @param {Object} addOption 添加的选项对象
 * @return {Object}
 */
function getWebpackConfig (...addOption) {
    let options = [webpackConfig].concat(...addOption);
    let config = {};

    for (let option of options) {
        for (let [key, value] of option) {
            config[key] = value;
        }
    }

    return config;
}


