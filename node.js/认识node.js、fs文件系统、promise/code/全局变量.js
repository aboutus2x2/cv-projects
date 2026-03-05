// global 和 globalThis

// globalThis 在浏览器上指的就是全局关键字this的指代，window
// global nodejs中的全局对象

// node.js 中 global === globalThis
console.log(global === globalThis)

// 当前脚本所在文件夹
console.log(__dirname)
// 当前运行的脚本的文件名
console.log(__filename)

// console 也是全局变量

// require 全局变量用于导入模块
require('path')

// 以下两组是全局变量
// exports
// module.exports

// 进程对象
console.log(process)
// 读取进程中的环境变量
console.log(process.env)
// 进程id
console.log(process.pid)