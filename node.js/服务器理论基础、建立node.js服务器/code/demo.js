let str = '/addsdf/asdf?a=1&b=2'

let r = str.match(/^([\s\S]*?)(\?[\s\S]*)?$/)
console.log(r)

const qs = require('querystring');

// 查询字符串解码
console.log(qs.decode('a=1&b=2'))