// commonjs引入模块
// require 引入模块的函数
// 参数就是模块名
// 返回一个模块
const os = require('os')

// 查看cpu信息
// console.log(os.cpus())
// cpu架构信息
console.log(os.arch())
// 平台信息
console.log(os.platform())