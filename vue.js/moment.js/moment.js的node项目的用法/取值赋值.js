// 知识点 api过多 可查看文档 http://momentjs.cn/docs/#/get-set/
// 取值
// 赋值

const moment = require('moment')

let now = moment()

// 取值
// 年
console.log(now.year());
// 月 月份从0开始计算
console.log(now.month());
// 日 一月中的第几天
console.log(now.date());
// 一周中的第几天 从 0 开始计算，0代表周日
console.log(now.weekday());
// 时
console.log(now.hour());
// 分
console.log(now.minute());
// 秒
console.log(now.second());
// 毫秒
console.log(now.millisecond());
// 一年中的第几天
console.log(now.dayOfYear());
// 获取这个月一共有多少天
console.log(now.daysInMonth());
// 获取一年中的第几周
console.log(now.week());



// 赋值
// 在取值函数的基础上传入参数就可以赋值
now.year(1997)
now.month(6)
now.date(1)
console.log(now);


// now.hour(30)
// console.log(now);



// 不要写负数 不能做正常运算
now.hour(-10)
console.log(now);
