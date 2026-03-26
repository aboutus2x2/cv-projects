// 什么是静态资源?
// 不会发生变化的资源就是静态资源，静态资源一般指不会变化的文件

// 静态资源服务器?
// 用于访问静态资源的服务器

const http = require('http');
const path = require('path');
const fsp = require('fs/promises');
const app = http.createServer();


// 定义静态资源文件夹
const staticDirPath = path.join(__dirname, 'public')

app.on('request', (req, res) => {
    // 拼接资源路径
    let assetPath = path.join(staticDirPath, `.${req.url}`)

    // 判断文件是否存在
    fsp.stat(assetPath).then((stat) => {
        // 判断当前路径是否是一个目录
        if (stat.isDirectory()) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end('无效文件')
            return
        }
        // 读取文件
        fsp.readFile(assetPath).then(data => {
            // data: 读出来的文件数据
            res.write(data)
        }).finally(() => {
            res.end()
        })
    }).catch(reason => {
        console.error(reason)
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('404资源未找到')
    })
})


app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})