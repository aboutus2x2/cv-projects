const moment = require('moment')

// - 通过时间字符串`1950-11-1` 解析成一个 moment 对象

let str = '1950-11-1'

let date = moment(str, 'YYYY-MM-D')

console.log(date);

// - 创建一个当前时间 now
let now = moment()

console.log(now);

// - 在 now 的基础上 设置 年月日 为`2000-01-01`
now.year(2000)
now.month(0)
now.date(1)

console.log(now.format('YYYY-MM-DD'));

// - 读取 now 的年月日时分秒
console.log(now.year(), now.month(), now.date(), now.hour(), now.minute(), now.second());

// - 将 now 格式化成如下的时间字符串`10:05 am 30/12/2000`
now.month(11)
now.date(30)
now.hour(10)
now.minute(5)
console.log(now.format('hh:mm a DD/MM/YYYY'));

// - 重置 now 的时间为当前时间，在 now 的基础上，加 1 个季度，然后再减 2 周
now = moment()
now.add(1, 'Q')
now.subtract(2, 'w')

console.log(now);


// - 重置 now 的时间为当前时间，创建一个 other 为 `2257-7-12`，使用 isAfter isBefore isSame 进行判断

now = moment()
let other = moment('2257-7-12', 'YYYY-M-DD')

console.log(now.isAfter(other));
console.log(now.isBefore(other));
console.log(now.isSame(other));

now.year(2257)
console.log(now.isSame(other, 'years'));
