1、javascript 本质上是什么？ 就是一门编程语言，解释执行的

2、浏览器的内核包括两部分核心：
- DOM渲染引擎
- JS解析器

3、js 运行在浏览器中的内核中的js引擎内部

4、是否js只能运行在浏览器中？ 不是的

5、实现动态网站的技术：java、php、.net、python、nodejs....

6、基于Node.js和第三方工具 electron 可以开发桌面应用程序

7、REPL read-eval-print-loop  读取代码-执行-打印结果-循环结果

8、在REPL环境中，_表示最后一次执行结果 .exit 可以退出REPL环境


## Buffer 基本操作
> Buffer 对象是Node 处理二进制数据的一个接口。 它是Node原生提供的全局对象
>可以直接使用，不需要require('buffer')

- 实例化
    + Buffer.from(array)
    + Buffer.from(string)
    + Buffer.alloc(size)
- 功能方法
    + Buffer.isEncoding() 判断是否支持该编码
    + Buffer.isBuffer() 判断是否为Buffer
    + Buffer.byteLength() 返回指定编码的字节长度，默认utf8
    + Buffer.concat() 将一组Buffer 对象合并为一个Buffer对象
- 实例方法
    + write() 向Buffer 里面写入内容
    + slice() 截取Buffer 对象
    + toString() 把Buffer对象转成string字符串
    + toJson() 把Buffer对象转成Json
        
