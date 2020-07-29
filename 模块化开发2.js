/*
* 引入模块
* */

// var module = require('./模块化开发')
//
// // var ret = module.sum(12, 13)
// var ret = module(12, 13)
//
// console.log(ret);

// require('./模块化开发')

// console.log(global.flag);

/* 模块导入的三种文件 .js .json .node （不加文件后缀的优先级） js > json > node
*  当文件同名时，会首先加载 js文件
*  然后在加载 json文件
*  最后加载 .node
* */
var  data = require('./json/data.json')

console.log(data.username);
