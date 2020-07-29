/**
 *
 * 获取参数值得方法是使用nodejs 内置的 process 对象。
 * 它提供了 argv属性，该属性是一个包含所有命令行调用参数的数组
 * 第一个参数是 node 命令的完整路径
 * 第二个参数死正在被执行的文件的完整路径
 * 所有其他的参数是从第三个位置开始
 * 可以循环迭代所有的参数
 *
 */

process.argv.forEach((val, index) => {
	console.log(`${index}: ${val}`);
})
// 也可以创建一个排除了前两个餐宿的新数组来仅获取其他参数
// const args = process.argv.slice(2)
// 则args[0] 是name=joe，需要对其进行解析。最好的方法是使用minimist库，该库有助于处理参数
// 但是需要在每个参数名称前使用双破折号
const args = require('minimist')(process.argv.slice(2))

console.log(args['port']);

