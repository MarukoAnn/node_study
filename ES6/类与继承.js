/*
*
* 类与继承
* */

// function Animal(name) {
//   this.name = name;
// }
//
// Animal.ab = function () {
//
// }
// $.ajax = function () {
//
// }
// Animal.prototype.showName = function () {
// 	console.log(this.name);
// }
//
// var a = new Animal('Tom')
// a.showName()
// var a1 = new Animal('Jerry')
// // console.log(a1。);
// a1.showName()

/*---------------继承-------------*/


/*----------新的类---------------*/

class Animal {

	//构造函数
	constructor(name) {
		this.name = name
	}

	showName(){
		console.log(this.name);
	}

	// 静态方法 （静态方法只能通过类名来调用，不可以使用实例来调用）
	static showInfo(){
		console.log('hello');
	}
}
// let a = new Animal('spaike')
//
// a.showName()
//
// Animal.showInfo()

/*---------------继承-------------*/

class Dog extends Animal{
	constructor(name, color) {
		super(name);
		this.color = color;
	}
	showColor(){
		console.log(this.color);
	}
}
let d = new Dog('豆豆', 'yellow')
d.showName()
d.showColor()
Dog.showInfo()
