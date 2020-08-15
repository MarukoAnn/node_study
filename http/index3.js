/*
*
* 函数封装调用
* */

const http = require('http')
const path = require('path')
const ss = require('./util')

http.createServer((req, res) => {
    ss.staticServer(req, res, path.join(__dirname, 'www'))
}).listen(3000, () => {
	console.log('runing.....');
})
