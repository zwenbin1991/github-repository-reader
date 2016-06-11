// 入口文件 初始化Vue实例和注册基于vue插件并加载reset样式
// 曾文彬
// 2016-6-11

'use strict';

// 加载Vue.js及Vue插件
import Vue from 'vue';
import VueResource from 'vue-resource';

// 加载Vue外层组件
import App from './App';

// 加载reset样式
import '../assets/css/reset';

// 注册vue-resource插件
Vue.use(VueResource);

// 实例化App组件
new Vue({
    el: 'body',
    components: {
        App: App
    }
});