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
    createdAt: {
        type: Date, default: () => {
            new Date()
        }, index: true
    },
    updatedAt: {type: Date, default: new Date(), index: true},
}, {
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

    // 新增数据
    // let doc = new Game({
    //     name: 'FEZ',
    //     platform: 'PC',
    //     price: 100
    // })
    // await doc.save()

    // await Game.create({
    //     name: 'Start Craft',
    //     platform: 'PC',
    //     price: 230
    // })


    // 删除数据
    // let r = await Game.deleteOne({_id: '63e4bfd89b9de0343e09b9d0'})
    // let r = await Game.deleteMany({_id: {$in: ['63e4c0169b9de0343e09b9d2', '63e4c01e9b9de0343e09b9d3']}})


    // 修改数据
    // let r = await Game.updateOne({_id: '63e4bfba36568e3647fa9cb9'}, {
    //     price: 130
    // }, {
    //     // 是否修改时间戳
    //     timestamps: true
    // })

    // 查询并修改数据
    let r = await Game.findOneAndUpdate({name: 'Diablo2'}, {
        price: 230,
        platform: 'PC'
    }, {
        // 是否修改时间戳
        timestamps: true,
        // 是否没有数据就插入数据
        // 当数据查询不到时就添加新数据
        upsert: true,
        // 返回修改后的数据
        new: true,
        // 若添加数据的话就要设置一些默认数据
        setDefaultsOnInsert: true
    })


    // 查询
    // $where 添加一个约束条件，值是一个用于数据库查询的js脚本，脚本里写一个布尔表达式
    // let r = await Game.find({$where: `this.updatedAt === this.createdAt`}, '-platform -price', {
    //     sort: {updatedAt: -1},
    //     skip: 1,
    //     limit: 2
    // })

    // 判断是否存在符合条件的数据
    // let r = await Game.exists({name: 'Start Craft'})

    // 查询数量
    // let r = await Game.count({platform: 'PC'})

    console.log(r)
})()