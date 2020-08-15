/*
*  初步实现服务器功能
* */

const http = require('http');
// // 创建服务器实例对象
// let server = http.createServer();
// // 绑定服务请求事件
// server.on('request', (req, res) => {
// 	res.end('hello')
// })
// // 监听端口
// server.listen(3000)
//

http.createServer((req, res) => {
	res.end('123')
}).listen(3000, () => {
	console.log('runing......');
})
