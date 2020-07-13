/*
 * @Date: 2020-07-10 14:53:09
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 15:16:47
 * @FilePath: \server\routes\web\index.js
 * @desc: 
 */ 
let Articles = require("../../models/articles")

/**
 * @description: 插入
 * @param {type} 
 * @return: 
 */
function insert(){
    var articles = new Articles({
        title: '标题',
        content: 'dfsadfa',
        createDate: new Date()
    })

    articles.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert();
