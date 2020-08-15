/*
* 
* 登录验证功能
* 
* */

const http = require('http')
const ss = require('./util')
const queryString = require('querystring')
const url = require('url')

http.createServer((req, res) => {
	// 启动静态资源服务
	if (req.url.startsWith('/www')){
		ss.staticServer(req, res, __dirname);
	}
	// 动态资源
	if (req.url.startsWith('/login')){
		// get请求
		if (req.method === 'GET'){
			// res.end('get')
			let parm = url.parse(req.url, true).query;
			if (parm.username === 'admin' && parm.password === '123'){
				res.end('get success');
			}else {
				res.end('get failure')
			}

		}
		// post 请求
		if (req.method === 'POST'){
			let pdate = ''
			req.on('data', (chunk) => {
				pdate+=chunk;
			})
			req.on('end', () => {
				let obj = queryString.parse(pdate);
				if (obj.username === 'admin' && obj.password === '123'){
					res.end('post success')
				}else {
					res.end('post failure')
				}
			})
		}
	}
}).listen(3000, () => {
	console.log('服务器已启动');
})
