/*
*
*  get 请求参数处理
*
*
* */

// const url = require('url')
//
// let str = 'http://www.baidu.com/abc?flag=123&keyword=java';
// let ret = url.parse(str, true)
// console.log(ret);

const http = require('http')
const url = require('url')

http.createServer((req, res) =>{
	let obj = url.parse(req.url, true)
	res.end(obj.query.username + '=====' + obj.query.password);
}).listen(3000, () => {
	console.log('runing...')
})
