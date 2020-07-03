/*
 * @Date: 2020-06-30 14:38:24
 * @LastEditors: chenamin
 * @LastEditTime: 2020-06-30 14:42:10
 * @FilePath: \typescript\antd-demo-ts\craco.config.js
 * @desc: 
 */ 
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
            lessLoaderOptions: {
                lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
                },
            },
            },
        },
    ],
};