const express = require('express');
const path = require("path");
const app = express();
// 引入 express-ws 包 并安装到 app 对象上
const expressWs = require('express-ws')(app)


app.use('/', express.static(path.join(__dirname, 'public')))


// 使用 app.ws 开一个 ws 协议的接口
// 用于接收和发送数据
app.ws('/', (ws, req) => {
    // ws 代表一个连接，是一个通信的数据通道

    // 给连接绑定消息事件，这样的话当客户端发送消息的时候服务器就会触发此处的回调函数
    ws.on('message', (msg) => {
        console.log(msg)
        // 服务器返回一句话作为响应
        ws.send('server receive message: ' + msg)
    })
})


app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})