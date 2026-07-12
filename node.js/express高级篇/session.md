## session理论
#### 什么是session
session是客户端链接服务器的一个会话，当创建与服务器的链接时，session由服务器创建，用于描述服务器状态的对象

#### 有什么用？
用于多次请求之间能够共享数据

#### session的原理
- 浏览器访问服务器到时候，服务器会创建一个session对象（每一个session对象，都会有一个唯一标志-sessionId）
- 默认情况下sessionId会保存在浏览器中的cookie中，再次访问这个服务器的时候，浏览器会将cookie中的sessionId发送到服务器，服务器可以根据sessionId找到session对象

#### 安装session工具
```
npm i express-session
```
配置
```js
const express = require('express')
const session = require('express-session')
const app = express()
const port = 1024

// 配置session
app.use(session({
    secret: 'this is a secret key', // 必要参数 这是一个签名密钥
    cookie: ('name', 'value', {})
    // cookie: ('name', 'value', {maxAge: 5*60*1000, secure: false})
}))
```

#### session操作
```js
app.get('/', (req, res) => {
    // 读取session
    console.log(req.session)
    // 写入session
    if (req.session.count)
        req.session.count = req.session.count + 1
    else
        req.session.count = 1
    res.end('hello world')
})
```

#### session特点
- session对象， 浏览器关闭之后，session对象消失。
- session，默认情况下，30分钟，都不再和服务器端有交互，则session无效。
- session可以实现服务器端数据的共享（临时数据）
- session保存的数据在服务器内存中
- 更换客户端，session就找不到了
- 由于session是存在内存中，多台服务器的项目就不能有效访问session
