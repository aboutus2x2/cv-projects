## cookie
#### 什么是cookie？
浏览器用于存储指定url请求下的参数的工具，就是cookie，是浏览器的状态管理工具

#### cookie有哪些作用
- 存储指定url路径下的参数，以 { key: value } 键值对的形式存储
- 设置数据失效时间，时间到后会自动失效
- 每次浏览器发起请求时，如果请求地址保存有cookie，那么浏览器会自动将cookie的值传给服务器
总的来说，cookie就是浏览器用来储存本地数据的

#### 安装cookie工具
```
npm install cookie-parser
```
配置
```js
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
```

#### cookie的读写
```js
app.get('/', (req, res) => {
    // 读取cookie
    console.log(req.cookies)
    // 写入cookie
    // httpOnly: 只能在http协议中使用
    // maxAge: 有效时间
    res.cookie('a', '123', {httpOnly: true, maxAge: 3000})
    res.end('hello world')
})
```

#### cookie的路径
我们可以通过cookie.setPath来修改路径，路径存在以下注意点：
- /web05/xx/add --- 添加了cookie
- /web05/xx     --- 找不到在“add”路径上，添加的cookie
- /web05/xx/add/abc --- 可以找到“add”路径上，添加的cookie 
- cookie.setPath("url")  , 修改cookie的添加路径 
response.addCookie(cookie) -- 添加cookie, 如果没有使用cookie.setPath("url")方式，修改cookie的添加路径，那么cookie的路径就是当前的url地址。

#### cookie的限制
- 用户可以禁止cookie
- 用户可以删除cookie
- cookie不安全  
- cookie能存储的数据小于4k
- cookie个数不能超过300个
- cookie的数据只能是字符串
- cookie不能存中文

> 要让cookie存储中文，需要对内容进行url编码
