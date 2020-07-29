/*
* 全局成员概述
*
* */

// 包含文件名称的全路径
// console.log(__filename); // D:\an_project\web_project\node_project\node_study\global.js
// 文件的路径 (不包含文件名称)
// console.log(__dirname); // D:\an_project\web_project\node_project\node_study


// 定时函数
var timer = setTimeout(() => {
	console.log(123);
}, 1000)

setTimeout(() => {
	clearTimeout(timer)
}, 2000)


global.console.log(123456);


// argv 是一个数组，默认情况下，前两项数据分别是 nodejs环境的路径: 当前执行的js文件的全路径
// 从第单个采纳数开始表示命令行参数
console.log(process.argv);

// 打印当前系统的架构 (64位或者32位)
console.log(process.arch);
