/*
 * @Date: 2020-07-03 15:40:47
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 18:24:25
 * @FilePath: \amin\server\app.js
 * @desc: 
 */ 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// 接口模块
const fileName = ['plugins', 'models']

// readdirSync: 返回指定目录下所有文件名称的数组对象
const global = fs.readdirSync(__dirname).filter(i => fileName.includes(i)).reduce((total,item) => {
  const files = fs.readdirSync(__dirname + '/' + item)
  files.map(i => {
    let name = nameKey = i.replace('.js', '')
    if(item === 'models'){
      nameKey = name.replace(/^\S/, s => s.toUpperCase())
    }
    total[item][nameKey] = require(  __dirname + '/' + item + '/' +  name)
  })
  console.log(total,'total')
  return total
}, {'plugins': {}, 'models': {}})


// 加载所有路由
const dirname = __dirname + '/routes'
// fs.readdirSync(dirname).forEach(i => {
//   const file = dirname + '/' + i;
//   console.log(file,'file')
//   if(fs.statSync(file).isDirectory()){
//     fs.readdirSync(file).forEach(item => {
//       const name = item.replace('.js', '')
//       console.log(name,'name')
//       require( file + '/' + name )(app, global['plugins'], global['models'])
//     })
//   }
// })
console.log(global['plugins'])

require('./plugins/db')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {
  console.log("http://localhost:3000")
})


module.exports = app;
