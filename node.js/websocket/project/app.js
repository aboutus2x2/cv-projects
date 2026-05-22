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

// 用于存储连接的对象
const wsMap = {}
// 自增id
let id = 0

// 聊天连接
app.ws('/chat', (ws, req) => {
    ws.on('message', (msg) => {
        // 反序列化数据对象
        msg = JSON.parse(msg)
        switch (msg.type) {
            case 'login':
                // 存储连接
                wsMap[msg.data] = ws
                // 分配id
                ws.id = id++
                wsMap[ws.id] = msg.data
                ws.send('连接成功')
                break;
            case 'send':
                // 读取要发送数据的连接
                // 找到消息接收人
                let _ws = wsMap[msg.data.receiver]
                // 获取发送人的名字
                let sender = wsMap[ws.id]
                // 发送消息
                _ws.send(`${sender}: ${msg.data.message}`)
                break;
        }
    })
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})