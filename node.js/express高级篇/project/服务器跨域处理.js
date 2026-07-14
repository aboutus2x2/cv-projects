const express = require('express');
const cors = require('cors')
const path = require("path");
const app = express()


// 若不记得跨域响应头有哪些，可以使用 cors 包
// app.use(cors())

// 添加一个中间件拦截所有请求
// app.all('*', (req, res, next) => {
//     // 设置允许跨域的响应头
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//     next()
// })

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => {
    res.json({msg: 'ok'})
})

app.get('/jsonp', (req, res) => {
    // const {callback} = req.query
    // res.setHeader('Content-Type', 'text/javascript')
    // const params = {x: 1, y: 2}
    // res.send(`${callback}('${JSON.stringify(params)}')`)

    res.jsonp({x: 1, y: 2})
})

app.listen(80, () => {
    console.log(`start on: http://127.0.0.1`)
})