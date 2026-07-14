const express = require('express');
const ah = require('express-async-handler')
const app = express();


// 若不记得异步处理器该如何写的话，可以安装 express-async-handler 包来代替

// 异步处理器
// 用于捕获异步函数中的异常
// asyncFunction 是一个异步方法
function asyncHandler(asyncFunction) {
    // 返回一个接口函数
    return (req, res, next) => {
        asyncFunction(req, res).catch(next)
    }
}


// 声明中间件
app.use((req, res, next) => {
    // req, res 就是接口中的请求对象和响应对象
    // next 函数在中间件中必须调用
    // 调用next有两种情况
    // 情况一: 不带参数的调用
    // 含义: 放行
    console.log('中间件1')
    next()
    // 情况二: 带参数
    // 含义: 直接将参数返回给页面
    // next(new Error(`这是next返回给页面的内容，强制被认为是异常，所以状态码为500`))
})

// app.get('/test1', async (req, res, next) => {
//     // 接口中的next作用和中间件中一样，但是接口中的next必须传参数
//     // next(new Error('test1 error'))
//     // 接口内抛出的异常也能被最后个中间件捕获
//     // throw new Error('test1 error')
//     res.json({msg: 1})
// })

// app.get('/test1', asyncHandler(async (req, res) => {
app.get('/test1', ah(async (req, res) => {
    throw new Error('test1 error')
    res.json({msg: 1})
}))

app.use((req, res, next) => {
    console.log('中间件2')
    next()
})

app.get('/test2', (req, res, next) => {
    console.log(abc)
    res.json({msg: 2})
})

app.use((req, res, next) => {
    console.log('中间件3')
    next()
})

app.get('/test3', (req, res) => {
    res.json({msg: 3})
})

// 在所有中间件的末尾，添加一个异常处理的中间件
// 此异常捕获中间件参数必须以 err 开头
// 此中间件的触发条件有:
// 1. 任意接口抛出异常
// 2. 任意接口或中间件的next调用后传了参数
app.use((err, req, res, next) => {
    // 打印异常
    console.error(err)
    res.json({success: false, msg: err.message})
    // next(err)
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})