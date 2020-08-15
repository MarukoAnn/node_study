/*
*  响应完整的页面信息
* */

const http = require('http');
const paths = require('path')
const fs = require('fs')

let redFile = (path, res) => {
	fs.readFile(paths.join(__dirname, 'www', path), 'utf-8', (err, fileContent) => {
		if (err){
			res.end('server error')
		}else {
			res.end(fileContent)
		}
	})
}

http.createServer((req, res) => {
	// req可以获取请求的URL路径 指的是端口号之后部分
	if (req.url.startsWith('/index')){
		redFile('index.html', res)
	}else if (req.url.startsWith('/about')){
		redFile('about.html', res)

	}else if (req.url.startsWith('/list')){
		redFile('list.html', res)
	}else {
		// 用来设置响应类型和编码
		res.writeHead(200,  {'Content-Type': 'text/plain; charset=utf8'})
		res.end('页面被外星人带走了')
	}
}).listen(3000, () => {
	console.log('runing......');
})
