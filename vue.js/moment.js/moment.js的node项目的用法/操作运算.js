// 知识点
// startOf
// endOf
// 加法
// 减法
// 完整单位名       单位名缩写
// years	        y 年
// quarters	        Q 季度
// months	        M 月
// weeks	        w 周
// days	            d 天
// hours	        h 小时
// minutes	        m 分钟
// seconds	        s 秒
// milliseconds	    ms 毫秒

const moment = require('moment')

let now = moment()

// startOf 获取一个时间单位下开始的时间
// now.startOf('days')

// endOf 获取一个时间单位下结束的时间
// now.endOf('y')

// 加法
// 语法: moment.add(amount, unit)
// amount: 数量
// unit: 单位
// now.add(1, 'w')

// 负数相当于减法
// now.add(-1, 'w')


// 减法
// 语法: moment.subtract(amount, unit)
// amount: 数量
// unit: 单位
// now.subtract(1, 'd')


// 减一个负数相当于加法
now.subtract(-1, 'd')

console.log(now);