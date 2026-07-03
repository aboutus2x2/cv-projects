const express = require('express');
const cookieParser = require('cookie-parser')
const app = express()

// 安装处理cookie的中间件
app.use(cookieParser())

app.get('/test', (req, res) => {
    // 读取cookie
    console.log(req.cookies)
    // 设置cookie
    res.cookie('name', JSON.stringify({name: '张三', sex: 'male'}), {/*maxAge: 60000,*/ httpOnly: false})
    res.json({msg: 'ok'})
})

app.listen(80, () => {
    console.log(`start on: http://127.0.0.1`)
})