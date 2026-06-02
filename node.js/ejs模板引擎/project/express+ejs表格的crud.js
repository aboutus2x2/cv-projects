const express = require('express');
const path = require("path");
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use(express.urlencoded({extended: true}))

const list = [
    {name: '张三', sex: 'male', age: 17},
    {name: '李四', sex: 'female', age: 24},
    {name: '老王', sex: 'other', age: 30},
]

app.get('/', (req, res) => {
    const {kw} = req.query
    let result = list
    if (kw) {
        // 通过正则过滤姓名不符合条件的数据
        result = list.filter(item => new RegExp(`^[\\s\\S]*${kw}[\\s\\S]*$`).test(item.name))
    }
    res.render('list', {list: result, kw})
})

// 新增数据
app.post('/add', (req, res) => {
    const {name, sex, age} = req.body
    list.push({name, sex, age})
    // 重定向
    res.redirect('/')
})

// 跳转到编辑页
app.get('/edit.html', (req, res) => {
    // 通过name查询数据
    const {name} = req.query
    const user = list.find(item => item.name === name)
    // 通过ejs返回一个页面
    res.render('edit', {user})
})

// 修改数据
app.post('/update', (req, res) => {
    const {name, sex, age} = req.body
    // 查找对应name的对象
    const user = list.find(item => item.name === name)
    user.sex = sex
    user.age = age
    res.redirect('/')
})

// 删除数据
app.get('/remove', (req, res) => {
    const {name} = req.query
    // 查找对应索引
    const i = list.findIndex(item => item.name === name)
    list.splice(i, 1)
    res.redirect('/')
})

app.listen(80, () => {
    console.log('server start on: http://127.0.0.1')
})