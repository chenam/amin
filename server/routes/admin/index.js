const getPage = require('../../plugins/getPage');

/*
 * @Date: 2020-07-13 17:18:27
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 18:19:16
 * @FilePath: \amin\server\routes\admin\index.js
 * @desc: 
 */ 
module.exports = (app, plugin, model) => {
    const express = require('express')
    const router = express.Router();
    let { Article} = model
    let {requestResult} = plugin

    // 获取文章
    router.get('/article', async (req,res) => {
        const p = req.query.page || 1;
        const s = req.query.count || 10
        const data = await getPage(Article, p, s)
        res.send(requestResult(data))
    })
}