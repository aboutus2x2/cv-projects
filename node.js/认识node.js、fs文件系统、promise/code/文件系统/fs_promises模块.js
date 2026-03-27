const fsp = require('fs/promises');
const path = require("path");

// 所有的 fs 模块的方法 都可以使用 fsp 对应的方法
// fsp 的方法都返回 promise 对象
fsp.readFile(path.join(__dirname, 'x/y.txt')).then(data => {
    console.log(data.toString())
})
