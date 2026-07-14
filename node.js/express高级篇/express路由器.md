## 路由器

#### 基本路由
语法：

``` js
const express = require('express')
const app = express() // 创建服务器

app.methods(url, handler)
// 例如：
app.get('/', (req, resp) => {
    resp.end('this is get root route')
})
app.post('/', (req, resp) => {
    resp.end('this is post root route')
})
```
由于在http协议中的RequestMethods还有delete, option, put, all这些都不常用，所以就不做例子了

#### 路由参数
这个路由参数非常常用，用于从路由获取参数。常见例子：商品详情页，直播房间等。

语法：
```js
// 用冒号加参数名来命名路由参数
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params) // 用req.params获取参数，参数是个json如：{userId:xxx, bookId: xxx}
})
```

#### 使用express.Router该类创建模块化的，可安装的路由处理程序。
当项目变大时，路由都写在一个地方的话那么就太拥挤了。我们需要把路由分离出来。

我们来创建一个例子：
- 创建```routers```文件夹
- 在文件夹中创建一个路由器模块，名叫```birds.js```
```js
const express = require('express')
const router = express.Router()

// 定义路由
router.get('/', (req, res) => {
    res.json({ msg: '你好' })
})

router.get('/about', (req, res) => {
    res.end('this is bird about')
})

module.exports = router
```
定义好的路由在 ```app.js``` 中安装
```js
app.use('/birds', birds) 
```
第一个参数，代表一个路由路径，这样的话就可以通过 ```http://localhost:3000/birds```来访问```birds.js```中的接口

当然路由还能嵌套，如在routers文件夹下创建一个叫```blue.js```，如下：
```js
const express = require('express')
const router = express.Router()

// 定义路由
router.get('/', (req, res) => {
    res.json({ msg: '你好blue' })
})

router.get('/about', (req, res) => {
    res.end('this is blue bird about')
})

module.exports = router
```
然后在birds.js中安装blue.js
```js
const blue = require('./blue')
router.use('/blue', blue)
```
这样就可以使用```http://localhost:3000/birds/blue```来访问blue.js下的接口了