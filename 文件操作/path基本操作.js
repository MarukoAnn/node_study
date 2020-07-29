/*
*  路径基本操作
* */

const path = require('path')

// 获取文件路径的最后一部分
// console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

// 获取路径
// console.log(__dirname);
// console.log(path.dirname('/abc/qqq/www/ccc'))

// 获取扩展名称

// console.log(path.extname('index.html'))


// 路径的格式化处理

//path.format() obj -> string
//path.parse() string -> obj

let obj = path.parse(__filename)
console.log(obj.base);
/*{ root: 'D:\\',  文件的根路径
	dir:'D:\\an_project\\web_project\\node_project\\node_study\\文件操作', 文件袋全路径
	base: 'path基本操作.js', 文件的名称
	ext: '.js', 文件的扩展名
	name: 'path基本操作' 文件名称
}*/

// let objpath = {
// 	root: 'd\\',
// 	base: 'abc.txt',
// 	ext: '.txt',
// 	name: 'abc'
// }
//
// let strpath = path.format(objpath)
// console.log(strpath);


// 判断是否我绝对路径
console.log(path.isAbsolute('D:\\\\an_project\\\\web_project\\\\node_project\\\\node_study\\\\文件操作'));
