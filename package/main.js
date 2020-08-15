/*
*  入口文件
* */

const path = require('path')
const fs = require('fs')
const md = require('markdown-it')();

let tplPath = path.join(__dirname, 'tpl.html');
let mdPath = path.join(__dirname, 'demo.md');
let target = path.join(__dirname, 'demo.html');
// var md = require('markdown-it')();
// var result = md.render('## markdoen-it rulezz!');
// console.log(result);

// 获取markdown 文件
fs.readFile(mdPath, 'utf8', (err,data) =>{
	if (err) return;
    // 对markdown 内容进行转换操作
	let result = md.render(data);
	console.log(result);
	// 读取模板内容
	let tpl = fs.readFile(tplPath, 'utf8', (err, tplData) => {
		if (err) return;
		tplData = tplData.replace('<%content%>', result);
		// 生成的最终页面写入目标文件
		fs.writeFile(target, tplData, (err) => {
			if (err) return
			console.log('转换完成');
		})
	})
})
