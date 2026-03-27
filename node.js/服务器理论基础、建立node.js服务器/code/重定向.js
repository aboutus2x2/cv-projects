const http = require('http');
const fsp = require('fs/promises');
const path = require('path')
const app = http.createServer();

app.on('request', async (req, res) => {
    if (req.url === '/') {
        // 重定向
        // 添加重定向的状态码
        res.statusCode = '302'
        // 添加重定向的路径
        res.setHeader('Location', '/1.png')
        res.end()
    } else if (req.url === '/1.png') {
        const data = await fsp.readFile(path.join(__dirname, 'public', '1.png'))
        res.end(data)
    } else {
        res.end('404')
    }
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})