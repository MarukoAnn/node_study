/*
*  post 请求参数处理
* */
const queryString = require('querystring');
const http = require('http')
// // parse 方法的作用就是把字符串转成对象
// let param = 'username=lisi&abc=123&abc=45';
// let obj = queryString.parse(param);
// console.log(obj);

http.createServer(((req, res) => {
	if (req.url.startsWith('/login')){
		let pdata = '';
		req.on('data', (chunk) => {
			pdata += chunk
		})
		req.on('end', () => {
			console.log(pdata);
			let obj = queryString.parse(pdata);
			res.end(obj.username + '----' + obj.password)
		})
	}
})).listen(3000, () => {
	console.log('runing....');
})
