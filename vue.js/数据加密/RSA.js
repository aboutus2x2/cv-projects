const NodeRSA = require('node-rsa')

// 创建密钥
// 创建 NodeRSA 加密器的实例对象
// b：加密长度
const keys = new NodeRSA({b: 512})

// 创建一对公钥和私钥
keys.generateKeyPair(2048, 65537)

// 要加密的消息
let message = '小明暗恋小红很久了'

// 加密
let r = keys.encrypt(message)
// r = r.toString()
console.log(r);



// 解密
// 先重新转换回buffer数组
// let buffer = Buffer.from(r)
// 将 buffer 进行解密
r = keys.decrypt(r)
console.log(r.toString());

