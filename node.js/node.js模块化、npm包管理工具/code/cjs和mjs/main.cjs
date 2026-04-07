const m2 = require('./module2.cjs')
// .cjs 文件中不能引入 .mjs 文件
const m1 = require('./module1.mjs')

console.log(m2)
console.log(m1)