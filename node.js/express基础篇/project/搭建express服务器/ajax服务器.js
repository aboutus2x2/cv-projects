const express = require('express');
const path = require("path");
const app = express();
const port = 80

app.use('/', express.static(path.join(__dirname, 'public')))

// 解析post请求的参数
// 用来解析数据类型为 application/json 格式的数据
app.use(express.json())
// 用来解析数据类型为 application/x-www-form-urlencoded 格式的数据
app.use(express.urlencoded({extended: true}))

app.get('/say', (req, res) => {
    res.json({msg: 'hello'})
})

app.get('/add', (req, res) => {
    // get 请求的参数可以直接通过 req.query 获取
    // res.json(req.query)
    res.json({result: Number(req.query.a) + Number(req.query.b)})
})

app.post('/postJson', (req, res) => {
    // post 请求依然可以接收查询字符串参数
    console.log(req.query)
    // post请求使用body接收参数
    res.json(req.body)
})

app.post('/postQs', (req, res) => {
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
})