// 什么是 common.js?
// common.js 是 非浏览器导入导出js模块的一种语法


// 使用 require 函数进行模块导入

// 使用完整路径进行导入
// const m1 = require('./modules/module1.js')
// .js 后缀名可以省略
// const m1 = require('./modules/module1')
// 路径不加开头的 ./ 或 / 则node.js 认为该路径是 npm 安装的模块路径
// const m1 = require('modules/module1')
// 导入一个目录，代表导入目录中的 index.js 文件
const index = require('./modules')



// console.log(m1)
console.log(index)


// 总结:
// 绝不会出错的导入方法就是使用完整路径