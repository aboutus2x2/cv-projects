const express = require('express')
// 引入html5历史模式中间件
const history = require('connect-history-api-fallback')
const path = require('path')
const app = express()

// 调用中间件
app.use(history())

// 配置静态资源文件夹
app.use('/', express.static(path.resolve(__dirname, './public')))


app.listen(80, () => {
    console.log('server start on: http://127.0.0.1');
})