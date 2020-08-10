/*
*
* 大文件操作 (流式操作)
* fs.createReadStream(path[, options])
* fs.createWriteStream(path[, options])
* */

const path = require('path')
const fs = require('fs')


let spath = path.join('D:\\an_project\\web_project\\node_project\\node_study', '文档.rar')
console.log(spath);
let dpath = path.join('C:\\Users\\Administrator\\Desktop', '文档.rar')
console.log(dpath);
//
// let readStream = fs.createReadStream(spath);
// let writeStream = fs.createWriteStream(dpath)

// 基于事件的处理方式
// $('input=[type=button]').on('click', function () {
//     console.log('hello');
// })
// let num = 1;
// readStream.on('data', (chunk) => {
// 	console.log(chunk);
// 	writeStream.write(chunk)
// 	num+=1;
// })
//
// readStream.on('end', () => {
// 	console.log('文件处理完成', '执行: ' + num + '次');
// })
/*------------管道-------------*/
// pipe 的作用是直接把输入流和输出流拼接到一起
// readStream.pipe(writeStream);

/**/
fs.createReadStream(spath).pipe(fs.createWriteStream(dpath))
