const CryptoJS = require('crypto-js')

// 要加密的信息
let message = '小明暗恋小红很久了'

// 加密用的密钥
let key = '不告诉你'

// 使用AES算法加密
let r = CryptoJS.AES.encrypt(message, key)
// 为了方便保存，通常把加密后的数据保存成字符串
r = r.toString()
console.log(r);


// 使用AES算法解密
r = CryptoJS.AES.decrypt(r, key)
// 将解密后的对象转换成字符串，此时需要告诉解密对象编码格式
r = r.toString(CryptoJS.enc.Utf8)
console.log(r);
