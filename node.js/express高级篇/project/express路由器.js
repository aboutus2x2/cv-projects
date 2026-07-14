const express = require('express')
const app = express();


// 引入路由器
const userRouter = require('./routers/userRouter');

// 安装路由器
// 第一个参数: 路由前缀
app.use('/user', userRouter)

// 路径参数
// :goodsId 是路径参数
app.get('/goods/:goodsId/user/:userId', (req, res) => {
    res.json(req.params)
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})
