/*
*
* 写文件操作
* */

const path = require('path')
const fs =  require('fs')

let strPath = path.join(__dirname, 'data.txt');
// fs.writeFile(strPath, 'hello nihao', 'utf-8',(err) => {
// 	if (err) throw err;
// 	console.log(err);
// })

// let buf = Buffer.from('hi');
// fs.writeFile(strPath, buf, 'utf-8', (err) => {
// 	console.log(err);
// })
// 同步操作
fs.writeFileSync(strPath, 'tom and jerry')
