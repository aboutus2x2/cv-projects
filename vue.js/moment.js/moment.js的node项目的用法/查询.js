// 知识点
// isBefore 判断是否是指定时间之前的时间
// isAfter 判断是否是指定时间之后的时间
// isSame 判断是否和指定时间相同

const moment = require('moment')

let now = moment()
let other = moment()

// isBefore 判断是否是指定时间之前的时间
other.add(1, 'months')

console.log(now.isBefore(other))
console.log(other.isBefore(now));


// isAfter 判断是否是指定时间之后的时间
console.log(now.isAfter(other));
console.log(other.isAfter(now));

// isSame 判断是否和指定时间相同
let time = Date.now()
now = moment(time)
other = moment(time)
console.log(now.isSame(other));

// 判断是否是同一个单位所指的时间
// 例如: 判断是否是同一天
now = moment('1997-7-1 12:14', 'YYYY-M-D H:m')
other = moment('1997-7-1 20:7', 'YYYY-M-D H:m')

console.log(now.isSame(other, 'days'));