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
// console.log(path.isAbsolute('D:\\\\an_project\\\\web_project\\\\node_project\\\\node_study\\\\文件操作'));

// 拼接路径（.. 标识上层路径，.表示当前路劲），在连接路劲的时候会格式化路劲
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', './'));


// console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

// 计算相对路劲
console.log(path.resolve('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log(path.resolve('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

// 解析路劲
console.log(path.resolve('目录1', '目录2/目录3/', '../目录4/文件.gif'));

// 两个特殊属性
console.log(path.delimiter); // 表示路劲分隔符 (window 是 \, Linux 是 /)
console.log(path.sep); // 环境变量分隔符 （windows中使用，linux中使用）
