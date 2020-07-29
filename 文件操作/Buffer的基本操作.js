/*
* Buffer的基本操作
* Buffer 本质是就是字节数组
*  1、构造方法 （类）
*  2、静态方法
*  3、实例方法
* */
// 实例化buf 对象
// 不推荐使用new 的方式
// let buf = new Buffer(5);
// let buf = Buffer.alloc(5)
// console.log(buf);

// let hello  = Buffer.from('hello')
// console.log(hello);

// let buf = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72])
// console.log(buf.toString());

// 静态方法
// console.log(Buffer.isEncoding('utf-8'));
// console.log(Buffer.isEncoding('gbk'));
//
//
// let hello  = Buffer.from('hello')
// console.log(Buffer.isBuffer(hello));
//
//
// let buf = Buffer.from('中国')
// console.log(Buffer.byteLength(buf));
// console.log(buf.toString());


// let buf1 = Buffer.from('tom')
// let buf2 = Buffer.from('jerry')
// let buf3 = Buffer.concat([buf1, buf2])
// console.log(buf3.toString());
// console.log(Buffer.byteLength(buf3));

/*---------------------------------------------*/
// 实例方法

// let buf1 = Buffer.alloc(5);
// buf1.write('hello', 1, 2);
// console.log(buf1.toString());

// let buf1 = Buffer.from('jon')
// buf1 = buf1.slice(0, 2) // 有返回值
// console.log(buf1.toJSON());

// toJSON 方法不需要显示调研，当JSON.stringify 方法调用的时候会自动调用toJSON方法
const buf = Buffer.from('hello')
const json = JSON.stringify(buf)
console.log(json);
