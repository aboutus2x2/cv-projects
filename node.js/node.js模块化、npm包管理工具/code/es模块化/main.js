// 什么是 es模块化？
// es模块化就是 EcmaScript 语法下的模块化语法

// 导入 默认导出的内容
// import m1 from './modules/module1.js'
// 导入 export 导出的内容
// import {sex, name, age} from './modules/module1.js'
// 同时导入 export default 和 export 导出的内容
// 注意: 导入 export default 的内容必须写在前面
// import m1, {sex, name, age} from './modules/module1.js'
// 导入模块中的所有内容并存入变量 m1
// import * as m1 from './modules/module1.js'
// 使用 as 来给导入的内容取别名
import {sex as se} from './modules/module1.js'
import path from 'path'
import {fileURLToPath} from 'url'

// es模块中没有默认的 __filename 和 __dirname
// 所以需要如下手段自行定义
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('=====__filename============__dirname==========')
console.log(__filename)
console.log(__dirname)

// import moment from 'moment'
// 最新的node.js规范中不允许引入一个文件夹，若要引入文件夹，需要加入选项--experimental-specifier-resolution=node，如下:
// node --experimental-specifier-resolution=node main.mjs
// import mod from './module2'

let sex = 'other'

// console.log(m1)
// console.log(sex, name, age)
console.log(sex)
console.log(se)
// console.log(mod)


// 异步导入
// import('./module2/index.js').then(m2 => {
// 当使用绝对路径引入模块的时候，需要添加文件协议
import('file://' + path.join(__dirname, './module2/index.js')).then(m2 => {
    console.log(m2)
})