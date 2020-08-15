/*
*  处理请求路径的分发
* 1、req 是对象是 class：http.IncomingMessage 的实例对象
* 2、res 是对象是 class：http.ServerResponse 的实例对象
* */

const http = require('http');


http.createServer((req, res) => {
	// req可以获取请求的URL路径 指的是端口号之后部分
	if (req.url.startsWith('/index')){
		// 向客户端相应内容
		//write 向客户端响应内容，可以写多次
		res.write('hello')
		res.write('hi')
		res.write('你好')
		// end方法用来完成响应，只能执行一次，必须执行一次。
		res.end('index')
	}else if (req.url.startsWith('/about')){
		res.end('about')
	}else {
		res.end('no content')
	}
}).listen(3000, () => {
	console.log('runing......');
})
