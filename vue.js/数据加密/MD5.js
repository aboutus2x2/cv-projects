const CryptoJS = require('crypto-js')

let message = '小明暗恋小红很久了'

// 使用MD5算法进行加密
let r = CryptoJS.MD5(message)
// 得到是加密后的一个对象
// 为了方标保存通常转换成字符串来保存
r = r.toString()
console.log(r);