const http = require('http');
const app = http.createServer();
const port = 1024

app.on('request', (req, res) => {
    // 设置响应头
    // 告诉客户端返回数据的类型
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')

    // local 本地: 指的是当前服务器所在的地方
    res.write(`本地ip: ${req.socket.localAddress}\n`) // 当前服务器ip地址
    res.write(`本地port: ${req.socket.localPort}\n`) // 当前服务器端口号
    // remote 远程: 指的就是客户端
    res.write(`远程ip: ${req.socket.remoteAddress}\n`) // 远程ip
    res.write(`远程port: ${req.socket.remotePort}\n`) // 远程端口号
    res.end()
})

// 第二个参数是服务器绑定的ip地址
// 127.0.0.1: 本机地址
// 192.168.124.48: 本机在路由器内网中的ip
// 0.0.0.0: 尽可能多的绑定本机支持的所有ip
app.listen(port, '0.0.0.0', () => {
    console.log(`server start on: http://127.0.0.1:${port}`)
})