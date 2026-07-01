const express = require('express');
const defaultData = require('./defaultData')
const mongoose = require('mongoose');
const {model, Schema} = mongoose
const app = express();

// 学号
let no = Date.now()

// 创建数据结构
const schema = new Schema({
    no: {type: Number, default: () => no++, index: true},
    name: {type: String, index: true},
    sex: {type: String, index: true},
    grade: {type: String, index: true},
    clazz: {type: String, index: true}
}, {timestamps: true});

// 创建 Model
const Stu = model('stu', schema)


// 列表数据
// const list = [
//     {no: 0, name: '小张三', sex: 'male', grade: '1', clazz: '1'},
//     {no: 1, name: '李四', sex: 'female', grade: '1', clazz: '2'},
//     {no: 2, name: '老王', sex: 'other', grade: '1', clazz: '3'},
//     {no: 3, name: '小明', sex: 'male', grade: '2', clazz: '1'},
//     {no: 4, name: '小红', sex: 'male', grade: '2', clazz: '2'},
// ]


// 设置模板引擎
app.set('view engine', 'ejs')

app.get('/list.html', async (req, res) => {
    // 获取分页查询重点参数
    // page: 当前页
    // size: 每页的数据量
    let {page, size, kw} = req.query

    // 参数校验，若没有传参则初始化参数
    page = page || 1
    size = size || 2
    kw = kw || ''

    // page = Number(page)
    // size = Number(size)
    //
    // // 先过滤条件
    // let result = list.filter(item => new RegExp(`^[\\s\\S]*${kw}[\\s\\S]*$`).test(item.name))
    //
    // // 总页数
    // const total = Math.ceil(result.length / size)
    //
    // // 分页
    // result = result.slice((page - 1) * size, page * size)

    const query = {name: {$regex: new RegExp(`^[\\s\\S]*${kw}[\\s\\S]*$`)}}
    const result = await Stu.find(query, '-__v', {
        sort: {updatedAt: -1},
        skip: (page - 1) * size,
        limit: size
    })

    // 获取数据量
    let total = await Stu.count(query)
    total = Math.ceil(total / size)

    res.render('list', {list: result, page, total, kw})
})

app.get('/insert', async (req, res) => {
    const {name, sex, grade, clazz} = req.query
    const r = await Stu.create({name, sex, grade, clazz})
    res.json(r)
})

app.get('/delete', async (req, res) => {
    const {_id} = req.query
    const r = await Stu.deleteOne({_id})
    res.json(r)
})

app.get('/update', async (req, res) => {
    const {_id, name, sex, grade, clazz} = req.query
    const r = await Stu.updateOne({_id}, {name, sex, grade, clazz}, {timestamps: true})
    res.json(r)
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
    // 绑定数据库事件
    const db = mongoose.connection
    db.on('error', err => {
        console.error(err)
    })
    mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/work1').then(() => {
        console.log('数据库连接成功')

        // 判断数据库是否有数据 没有数据就使用加数据来初始化数据库
        Stu.count({}).then(count => {
            console.log(count)
            if (count === 0) {
                // 初始化数据库
                Stu.insertMany(defaultData)
            }
        })
    })
})