/*
 * @Date: 2020-07-09 14:36:56
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 14:12:25
 * @FilePath: \server\plugins\db.js
 * @desc: 
 */ 


module.exports = (app) => {
    var mongoose = require("mongoose")
    DB_URL = "mongodb://localhost:27017/amin"

    // /*调试模式是mongoose提供的一个非常实用的功能，用于查看mongoose模块对mongodb操作的日志，一般开发时会打开此功能，以便更好的了解和优化对mongodb的操作。*/
    // mongoose.set('debug', true);

    /**
     * 连接数据库
     */
    mongoose.connect(DB_URL);

    /**
     * 连接成功
     */
    mongoose.connection.on('connected', function () {
        console.log('Mongoose connection success to ' + DB_URL);
    });

    /**
     * 连接异常
     */
    mongoose.connection.on('error',function (err) {
        console.log('Mongoose connection error: ' + err);
    });

    /**
     * 连接断开
     */
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose connection disconnected');
    });
};


