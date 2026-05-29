const express = require('express')
const path = require("path");
const app = express();

// 告诉express使用 ejs 作为模板引擎
app.set('view engine', 'ejs')
// 默认情况 ejs 模板应该放在 views 文件夹中
// 可以使用以下语句修改模板文件存放的目录
app.set('views', path.join(__dirname, 'templates'))

app.get('/', (req, res) => {
    // 调用模板引擎的渲染方法
    // 并返回渲染完后的html给浏览器
    // res.render('index', {name: '小明'})
    res.render('home', {home: 'hello ejs'})
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})