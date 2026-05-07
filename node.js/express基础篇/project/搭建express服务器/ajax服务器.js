const express = require('express');
const fileUpload = require('express-fileupload')
const fsp = require('fs/promises')
const path = require("path");
const app = express();
const port = 80

app.use('/', express.static(path.join(__dirname, 'public')))

// 解析post请求的参数
// 用来解析数据类型为 application/json 格式的数据
app.use(express.json())
// 用来解析数据类型为 application/x-www-form-urlencoded 格式的数据
app.use(express.urlencoded({extended: true}))
// 解析文件参数的配置
app.use(fileUpload({
    // 文件大小限制
    limits: {fileSize: 10 * 1024 * 1024},
    // 使用临时文件
    useTempFiles: true,
    // 临时文件夹路径
    tempFileDir: path.join(__dirname, 'tmp')
}))


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

// 上传文件
app.post('/upload', async (req, res) => {
    // 读取文件参数
    // req.files 代表上传的文件集合
    console.log(req.files.f)
    let file = req.files.f
    // 读取临时文件
    const data = await fsp.readFile(file.tempFilePath)
    // 写入上传文件的文件夹
    await fsp.writeFile(path.join(__dirname, 'upload', file.name), data)
    // 删除临时文件
    await fsp.rm(file.tempFilePath, {force: true})
    res.json({msg: 'ok'})
})

app.listen(port, () => {
    console.log(`server start on: http://127.0.0.1`)
})