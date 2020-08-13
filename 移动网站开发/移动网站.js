/*
*
*  移动网站开发
*  成绩查询功能
* */

const http  = require('http');
const fs = require('fs');
const path = require('path');
const queryString = require('querystring')
const scoreData = require('./data/scores.json')
const url = require('url')
http.createServer((req, res) => {
	// 路由 (请求路径 + 加请求方式)
	// 查询成绩网站的入口地址 /query
    if (req.url.startsWith('/query') && req.method === 'GET'){
       fs.readFile(path.join(__dirname, 'view', 'index.html'), 'utf-8', (err, content) => {
           if (err){
           	res.writeHead(500, {
           		'Content-Type': 'text/plain;charset=utf8'
			});
           	res.end('服务器错误,请与管理员联系')
		   }
           res.end(content)
	   })
	}else if (req.url.startsWith('/score')){
    	// 获取成绩的结果 /score
		console.log(567);
		req.on('data', (chunk) => {
			console.log('进不来');
			console.log(chunk);
		});
		req.on('end', () => {
			console.log('进来了');
			let obj = url.parse(req.url, true);
			let result = scoreData[obj.query.code];
			fs.readFile(path.join(__dirname, 'view', 'score.html'), 'utf-8', (err, content)=>{
				if (err){
					res.writeHead(500, {
						'Content-Type': 'text/plain; charset=utf-8'
					});
					res.end('服务器错误，请与管理员联系');
				}else {
					// 返回内容之前要进行数据渲染
					console.log(result);
					content = content.replace('$$chinese$$', result.chinese);
					content = content.replace('$$math$$', result.math);
					content = content.replace('$$english$$', result.english);
					content = content.replace('$$summary$$', result.summary);
					res.end(content)
				}

			})
		})

	}

	// 获取成绩的结果 /score



}).listen(3000, () => {
	console.log('runing....');
})
