// 第一种方式
// const car = {
// 	brand: 'Ford',
// 	model: 'Fiesta'
// }
// // 使用module.exports 将car导出（内容公开，因此可以将其导入应用程序的其他部分或者其他应用程序中）
// module.exports = car
// 第二种方式
// const car = {
// 	brand: 'Ford',
// 	model: 'Fiesta'
// }
//
// exports.car = car
exports.car = {
	brand: 'Ford',
	model: 'Fiesta'
}
// module.exports 和 export 之间有什么区别?
// 前者公开了它的指向对象，后者公开了它指向的对象属性
