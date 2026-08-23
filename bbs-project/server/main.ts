import express from 'express'
import mongoose from 'mongoose'
import {App} from "./helper/App.js";
import assert from "assert";
import path from "path";
import cookieParser from 'cookie-parser'

const _app = express()
const app = new App(_app)

// 静态资源文件夹
_app.use('/', express.static(path.join(__dirname, '../../client')))

// 参数解析
_app.use(express.urlencoded({extended: true}))
_app.use(express.json())
_app.use(cookieParser())


// 引入路由器
import userRouter from "./routers/userRouter.js";
import {BusinessResponse} from "./types/BusinessResponse.js";


_app.use('/user', userRouter)


app.get('/test', async (req, res) => {
    assert(req.query.a, 'a error')
    res.json(BusinessResponse.success())
})

// 全局异常捕获
_app.use((err, req, res, next) => {
    if (err) {
        res.json(BusinessResponse.fail(err))
    } else {
        res.json(BusinessResponse.fail())
    }
})

_app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
    // 创建数据库连接
    const db = mongoose.connection
    db.on('error', err => {
        console.error('mongodb: ', err)
    })
    mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/bbs').then(() => {
        console.log('数据库连接成功')
    })
})