const express = require('express');
const app = express();
const port = 80

app.get('/', (req, res) => {
    // 原始的方法
    // res.statusCode = 302
    // res.setHeader('Location', '/hello')
    // res.end()

    // express 重定向
    res.redirect('/hello')
})

app.get('/hello', (req, res) => {
    // 发送json数据给客户端
    res.json({msg: 'hello'})
})

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
})