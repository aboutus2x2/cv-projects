const mongoose = require('mongoose'); // 引入驱动
const {model, Schema} = mongoose // 从 mongoose 中引入创建表的工具

// 创建连接
mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/test').then(() => {
    console.log('连接成功')

    // 创建集合

    // 创建集合结构
    // 结构schema就是用来描述数据库集合有哪些字段和各个字段的详细描述
    const schema = new Schema({
        // type: 该字段的数据类型
        // index: 是否添加索引，添加了索引的字段查询速度更快
        name: {type: String, index: true},
        platform: {type: String, index: true},
        price: {type: Number, index: true}
    });
    // 构造集合类型
    const Game = model('game', schema)

    // 查询
    Game.find().then(res => {
        console.log(res)
    })
})

const db = mongoose.connection
// console.log(db)
db.on('open', () => {
    console.log('打开数据库连接')
})
// 绑定异常事件
db.on('error', err => {
    console.error('数据库异常:', err)
})
