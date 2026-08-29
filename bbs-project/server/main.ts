import express from 'express'
import mongoose from 'mongoose'
import {App} from "./helper/App.js";
import assert from "assert";
import path from "path";
import cookieParser from 'cookie-parser'
import session from 'express-session'
import {getUserInfo} from "./middleware/getUserInfo";
import fileUpload from 'express-fileupload'

const _app = express()
const app = new App(_app)

// 静态资源文件夹
_app.use('/', express.static(path.join(__dirname, '../../client')))
_app.use('/upload', express.static(path.join(__dirname, '../upload')))

// 参数解析
_app.use(express.urlencoded({extended: true}))
_app.use(express.json())
_app.use(cookieParser())
_app.use(session({
    secret: 'this is my key'
}))
_app.use(fileUpload({
    // 文件大小限制
    limits: {fileSize: 10 * 1024 * 1024},
    // 使用临时文件
    useTempFiles: true,
    // 临时文件夹路径
    tempFileDir: path.join(__dirname, 'tmp'),
    // 解决中文乱码的字符集参数
    defParamCharset: 'utf8'
}))
_app.use(getUserInfo())


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
        console.error(err)
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