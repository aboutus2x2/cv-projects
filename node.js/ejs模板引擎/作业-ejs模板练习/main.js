const express = require('express');
const app = express();

// 列表数据
const list = [
    {no: 0, name: '小张三', sex: 'male', grade: '1', clazz: '1'},
    {no: 1, name: '李四', sex: 'female', grade: '1', clazz: '2'},
    {no: 2, name: '老王', sex: 'other', grade: '1', clazz: '3'},
    {no: 3, name: '小明', sex: 'male', grade: '2', clazz: '1'},
    {no: 4, name: '小红', sex: 'male', grade: '2', clazz: '2'},
]

// 学号
let no = 5

// 设置模板引擎
app.set('view engine', 'ejs')

app.get('/list.html', (req, res) => {
    // 获取分页查询重点参数
    // page: 当前页
    // size: 每页的数据量
    let {page, size, kw} = req.query

    // 参数校验，若没有传参则初始化参数
    page = page || 1
    size = size || 2
    kw = kw || ''

    page = Number(page)
    size = Number(size)

    // 先过滤条件
    let result = list.filter(item => new RegExp(`^[\\s\\S]*${kw}[\\s\\S]*$`).test(item.name))

    // 总页数
    const total = Math.ceil(result.length / size)

    // 分页
    result = result.slice((page - 1) * size, page * size)

    res.render('list', {list: result, page, total, kw})
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})