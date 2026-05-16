const express = require('express');
const fileUpload = require('express-fileupload');
const path = require("path");
const fsp = require('fs/promises')
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))

// 解析参数
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({
    limit: {size: 10 * 1024 * 1024},
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    defParamCharset: 'utf8'
}))

app.get('/now', (req, res) => {
    res.json({now: new Date().toLocaleString()})
})

app.get('/add', (req, res) => {
    let x = Number(req.query.x)
    let y = Number(req.query.y)
    res.json({result: x + y})
})

app.post('/sub', (req, res) => {
    let x = Number(req.body.x)
    let y = Number(req.body.y)
    res.json({result: x - y})
})

app.get('/', (req, res) => {
    res.redirect('/now')
})

app.post('/uploadHeadIcon', (req, res) => {
    const file = req.files.headIcon
    // 读取缓存
    fsp.readFile(file.tempFilePath).then(data => {
        // 写文件到 upload 文件夹
        return fsp.writeFile(path.join(__dirname, 'upload', file.name), data)
    }).then(() => {
        // 删除临时文件
        return fsp.rm(file.tempFilePath, {force: true})
    }).then(() => {
        res.json({url: `/upload/${file.name}`})
    }).catch(reason => {
        console.error(reason)
        res.json({msg: 'fail'})
    })
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})