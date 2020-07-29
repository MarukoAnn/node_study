/*
* 模块化开发
*
* 传统模块化有如下的缺点
* 1、命名冲突
* 2、文件依赖
*
* 前端标准模块化规范: (异步)
* 1、AMD - require.js
* 2、CMD - sea.js
*
* 服务器端的模块化规范:（同步）
* 1、CommonJs - Node.js
*
* 模块化相关规则:
* 1、如何定义模块:
*    一个js文件就是一个模块，模块内部的成员都是相互独立的
* 2、模块成员的导出和引入
*
* */


// var sum = function (a, b) {
//     return a + b
// }


// 导出成员
// exports.sum = sum;


// 导出成员的另一种方式
// module.exports =  sum

// 模块成员导出 global
var flag = 123;

global.flag = flag;
