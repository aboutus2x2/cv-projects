const path = require('path');

const p = 'd:/xyz/abc.config.png'
// 目录名称
console.log(path.dirname(p))
// 文件全称
console.log(path.basename(p))
// 扩展名
console.log(path.extname(p))
// 结合路径
console.log(path.join(p, '../', 'qwe'))

// join 函数，用于拼接文件路径，通常用来得到一个绝对路径
console.log(path.join('d:/test', '../abc', 'c:/efg', 'hello.js'))

// resolve 函数，用于处理文件路径
// resolve 函数相当于模拟了 cmd 读取路径的过程
console.log(path.resolve('c:/abc', 'd:/demo', 'ok', 'hello.js'))