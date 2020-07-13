/*
 * @Date: 2020-07-10 14:34:03
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 15:11:38
 * @FilePath: \server\models\articles.js
 * @desc: 文章模块
 */ 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 定义schema
var schema  = new Schema({
    id: Number,
    title: {type: String}, // 标题
    content: {type: String}, // 内容
    createDate: {type: Date}, // 编辑日期
})

// 生成model： model是schema生成的模型，可以对数据库进行操作
module.exports = mongoose.model('Articles', schema )