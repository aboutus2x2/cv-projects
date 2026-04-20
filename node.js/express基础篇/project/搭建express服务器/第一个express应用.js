const express = require('express'); // 引入 express 模块
const app = express(); // 创建服务器应用程序对象
const port = 80

// 注册接口
// 接口: 网络接口，一个 url 路径，对应服务器上一个提供服务的功能，这个功能就是服务器上的一个接口
// 第一个参数: url
// 第二个参数: 接口回调
app.get('/greeting', (req, res) => {
    res.end('hello world')
})

// 启动服务器
app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
})