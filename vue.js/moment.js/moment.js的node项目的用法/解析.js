// 知识点
// 获取系统当前时间
// 通过字符串解析时间 https://momentjs.com/docs/#/parsing/string-format/
// 通过格林威治1970毫秒数字获取时间
// 通过Date对象获取时间


// 将不同类型的参数转换成一个 moment 的时间对象，这个过程就叫解析


// 引入 moment 模块
const moment = require('moment')

// 获取系统当前时间
const now = moment()
console.log(now);


// 通过字符串解析时间
// 第一个参数: 要解析的字符串
// 第二个参数: 解析模板，用于告诉moment如何解析第一个参数的字符串
let time = moment('2000-12/20', 'YYYY-MM/DD')
console.log(time);
time = moment('123456', '1YYYY6')
console.log(time);
time = moment('123456', 'YY3456')
console.log(time);
time = moment('2000-01', 'YYYY-MM')
console.log(time);
time = moment('2000-1', 'YYYY-M')
console.log(time);


// 通过格林威治1970毫秒数字获取时间
let dateNum = 1678177665594
time = moment(dateNum)
console.log(time);


// 通过Date对象获取时间
let date = new Date(2022, 0, 15)
time = moment(date)
console.log(time);