const express = require('express')
const app = express()


app.get('/', (req, res) => {
	res.send('你好')
})

app.listen(3000, () => console.log('服务器已就绪'))

// 正常结束进程
// process.on('SIGTERM', () => {
// 	server.close(() => {
// 		console.log('进程已终止');
// 	})
// })
// 结束进程的代码
// process.kill(process.pid, 'SIGTERM')
