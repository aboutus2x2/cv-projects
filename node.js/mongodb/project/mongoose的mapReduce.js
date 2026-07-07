const mongoose = require('mongoose');
const {model, Schema} = mongoose;

// 数据结构
const schema = new Schema({
    name: {type: String, index: true},
    platform: {type: String, index: true},
    price: {type: Number, index: true},
    // default: 字段的默认值
    // createdAt: {type: Date, default: new Date(), index: true},
    // updatedAt: {type: Date, default: new Date(), index: true},
}, {
    // 添加时间戳
    timestamps: true
});

// 构建数据模型Model
const Game = model('game', schema);

(async () => {
    const db = mongoose.connection
    db.on('open', () => {
        console.log('打开数据库连接')
    })
    db.on('error', err => {
        console.error('数据库异常:"', err)
    })
    await mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/test')
    console.log('连接成功')

    let r = await Game.mapReduce({
        // 第一个参数是 map 方法
        map: function () {
            // 该函数中的 this 代表数据库中的每条数据
            // emit 函数需要提交一个参数，该参数是映射 this 后返回给数据库的对象
            // 第一个参数是分类
            emit(this.platform, {price: this.price, total: this.price, count: 1})
        },
        // 第二个参数是 reduce 方法
        reduce: function (key, values) {
            // key: 分类的key
            // values: 按分类，分好的一批数据，但不是所有数据
            return values.reduce((p, n) => {
                // 统计数据
                p.total += n.price
                p.count++
                return p
            })
        },
    })

    console.log(r)
    console.log(r.results[0].value)

})()