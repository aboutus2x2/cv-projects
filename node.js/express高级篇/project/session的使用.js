const express = require('express');
const session = require('express-session')
const app = express()

// 配置session
app.use(session({
    // 指定密钥 必填
    secret: 'this is my key'
}))

app.get('/test', (req, res) => {
    // 读取session
    console.log(req.session)

    // 设置session
    req.session.count = req.session.count ? req.session.count + 1 : 1
    res.json({count: req.session.count})
})

app.get('/test2', (req, res) => {
    res.json({count: req.session.count})
})

app.listen(80, () => {
    console.log(`start on: http://127.0.0.1`)
})