

const http = require('http');
const path = require('path')
const fs = require('fs')
const mime = require('./json/mime.json')

http.createServer((req, res) => {
	fs.readFile(path.join(__dirname, 'www', req.url), (err, fileContent) => {
		if (err){
		//	没有找到对应文件
			res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'})
			res.end('页面被狗狗叼走了')
		}else {
			let dtype = 'text/html'
			// 获取请求文件的后缀
			let ext = path.extname(req.url);
			// 如果请求的文件后缀合理，就获取标准的响应格式
			if (mime[ext]){
				dtype = mime[ext]
			}
			// 如果内容为文本类型，就设置字符集为utf-8
			if (dtype.startsWith('text')){
				dtype += ';charset=utf8'
			}
			res.writeHead(200, {
				'Content-Type': dtype
			})
			res.end(fileContent)
		}
	})
}).listen(3000, () => {
	console.log('runing.....');
})
