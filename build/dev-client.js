// 监听浏览器刷新事件客户端
// 曾文彬
// 2016-6-11

'use strict';

var hotClient = require('webpack-hot-middleware/client');

hotClient.subscribe(function (event) {
    event.action === 'reload' && location.reload();
});