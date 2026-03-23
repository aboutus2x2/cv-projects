// 引入网络通信模块
const http = require('http');
// 创建一个服务器对象
const app = http.createServer()
// 声明端口号
const port = 1024


// 绑定request事件
app.on('request', (req, res)=>{
    // req: 请求对象，客户端发送来的数据封装到该对象中
    // res: 响应对象，服务器用于做出回应的对象

    // 服务器向客户端写数据
    res.write('hello\n')
    // 结束响应并传递数据
    res.end('world')
})


// 启动服务器
app.listen(port, () => {
    // 当服务器启动成功后，就会调用此函数
    console.log(`server start: http://127.0.0.1:${port}`)
})
