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
        
### npm 常用命令
1、全局安装 -g   
> 全局安装的包位于Node.js 环境的 node_modules 目录下，全局安装的包一般用于命令行工具
 
2、本地安装
npm常用安装命令：  
- 安装包(如果没有指定版本号默然安装最新的版本)
  - npm install -g 包名称(全局安装)
  - npm install 包名称(局部安装)
- 安装包的时候可以指定版本
  - npm install -g 包名称@版本号
- 卸载包
  - npm uninstall -g 包名
- 更新包
  - npm update -g 包名

### yarn
1、 初始化包
- yarn init  

2、安装包
- yarn add xxx

3、移除包
- yarn remove xxx

4、更新包
- yarn upgrade xxx

5、安装开发依赖的包
- yarn add xxx --dev

6、安装全局包
- yarn global add xxx

7、设置下载镜像的地址

- npm conifg set registry url
- yarn config set registry url

8、安装所有依赖

- npm install 
- yarn install

9、执行包
- npm run
- rarn run


## 自定义包

1、包的规范
- package.json 必须在包的项目顶层目录下
- 二进制文件应该在bin目录下
- javascript 代码应该在lib目录下
- 文档应该在doc目录下
- 但愿测试应该在test目录下

2、package.json 字段分析
- name：包的名称,必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
- description: 包的摘要说明
- version: 符合语义化版本的识别规范的版本字符串
- keywords: 关键字数组，通常用于搜索
- maintainers：维护者数组，每个元素要包含namme、email(可选)、web(可选)字段
- contributors：贡献者数组，格式与maintainers相同，包的作者应该是贡献者数组的第一个元素
- bugs：提交bug的地址，可以是网站或者电子邮件地址
- licenses：许可证数组，每个元素要包含type(许可证名称)和url(链接许可证文本的地址)字段
- respostories: 仓库托管地址数组，每个元素包含type(仓库类型，如git)、url(仓库的地址)和path(相对于仓库的路径，可选)字段
- dependcies: 包的依赖，一个关联数组，由包的名称和版本号组成


## node js总结
1、Node.js 不需要依赖于第三方应用软件(Apache), 可以基于api自己实现

2、实现静态资源服务器

3、路由处理

4、动态网站

5、模板引擎

6、get和post参数传参和处理

web 开发框架 express

