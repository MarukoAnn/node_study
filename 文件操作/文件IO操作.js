/*
*  文件操作
* */

const  fs = require('fs')
console.log(1);
/* --------------异步操作--------------------*/
fs.stat('./data.txt', (err, stat) => {
	// 一般回调函数的第一个参数是错误对象，如果err 为空 null，表示没有报错，否则报错。
	if (err) return;
	// if (stat.isFile()){
	// 	console.log('文件');
	// }else if (stat.isDirectory()){
	// 	console.log('目录');
	// }
	/*
	* atime 文件访问的时间
	* ctime 改变时间 (文件状态时间发生变化的时间  比如文件的权限)
	* mtime 文件数据发生变化的时间
	* birthtime 文件创建的时间
	* */
})
/*-----------------同步操作------------------*/
console.log(3);

let ret = fs.statSync('./data.txt');
console.log(2);
