const express = require('express');
const path = require("path");
const app = express();

// 静态资源文件夹的声明放在所有接口的上面

// 使用use安装中间件(插件)
// express.static 声明一个静态资源文件夹的路径
// 第一个参数: 访问静态资源时 url 前缀（含义是: 将 /static 路径 映射到 public 文件夹）
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('hello express')
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})