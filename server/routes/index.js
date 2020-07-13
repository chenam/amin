/*
 * @Date: 2020-07-03 15:40:47
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-10 15:49:31
 * @FilePath: \server\routes\index.js
 * @desc: 
 */ 
var express = require('express');
// 创建一个路由容器，将所有的路由中间件挂载给路由容器

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
