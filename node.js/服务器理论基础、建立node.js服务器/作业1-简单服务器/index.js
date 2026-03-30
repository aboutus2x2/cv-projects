// 制作一个静态资源服务器
const http = require('http')
const app = http.createServer()
const path = require('path')
const fsp = require('fs/promises')

const staticPath = path.join(__dirname, 'static')

app.on('request', (req, res) => {

    const assetPath = path.join(staticPath, `.${req.url}`)

    // 读文件
    fsp.readFile(assetPath).then(data => {
        // 写给客户端
        res.end(data)
    }).catch(reason => {
        // 返回错误提示
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`404资源未找到`)
    })
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`);
})