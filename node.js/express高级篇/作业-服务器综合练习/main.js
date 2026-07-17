const express = require('express')
const ah = require('express-async-handler');
const cors = require('cors');
const mongoose = require('mongoose');
const assert = require("assert");
const app = express();
const Add = require('./models/add')

// 支持跨域
app.use(cors())

// 加法
app.get('/add', ah(async (req, res) => {
    let {x, y} = req.query
    // 参数验证
    assert(typeof x === 'string' && !isNaN(Number(x)), '参数x异常')
    assert(typeof y === 'string' && !isNaN(Number(y)), '参数y异常')
    x = Number(x)
    y = Number(y)
    let sum = x + y
    // 添加数据到数据库
    let r = await Add.create({x, y, sum})
    res.json({id: r._id})
}))

// 统一异常处理中间件
app.use((err, req, res, next) => {
    if (err) res.json({success: false, msg: err.message})
    else res.json({success: false})
})


app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
    const db = mongoose.connection
    db.on('error', err => {
        console.error(err)
    })
    mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/work2').then(() => {
        console.log('数据库连接成功')
    })
})