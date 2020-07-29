// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })
//
// readline.question(`你叫什么名字？`, (name) => {
// 	console.log(`您好 ${name}`);
// 	readline.close()
// })

// Inquirer.js 可以执行许多操作，列如询问多项选择、展示单选按钮、确认等

//所有的方案都值得了解，尤其是Nodejs提供的内置方案，但是如果打算将CLI输入提升到更高的水平，
// 则Inquirer.js是最优的选择

const inquirer = require('inquirer')

var  questions = [
	{
		type: 'input',
		name: 'name',
		message: '你叫什么名字？'
	}
]

inquirer.prompt(questions).then( answers => {
	console.log(`你好 ${answers['name']}!`);
})
