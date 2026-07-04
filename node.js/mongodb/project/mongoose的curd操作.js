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


    // let r = await Game.insertMany([
    //     {
    //         name: 'Super Mario Bros',
    //         price: 320,
    //         platform: 'FC'
    //     },
    //     {
    //         name: 'The Last Of Us',
    //         price: 400,
    //         platform: 'PS'
    //     },
    //     {
    //         name: 'Mather',
    //         price: 250,
    //         platform: 'FC'
    //     },
    //     {
    //         name: 'Dead Space',
    //         price: 300,
    //         platform: 'XBOX'
    //     },
    //     {
    //         name: 'Final Fantasy 10 Remaster',
    //         price: 280,
    //         platform: 'PS'
    //     },
    //     {
    //         name: 'Halo',
    //         price: 366,
    //         platform: 'XBOX'
    //     },
    //     {
    //         name: 'Gears Of War',
    //         price: 333,
    //         platform: 'XBOX'
    //     },
    //     {
    //         name: 'God Of War',
    //         price: 420,
    //         platform: 'PS'
    //     },
    //     {
    //         name: 'Legend Of Zalda',
    //         price: 460,
    //         platform: 'FC'
    //     }
    // ])


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
    // let r = await Game.findOneAndUpdate({name: 'Diablo'}, {
    //     price: 500,
    //     platform: 'PC'
    // }, {
    //     // 是否修改时间戳
    //     timestamps: true,
    //     // 是否没有数据就插入数据
    //     // 当数据查询不到时就添加新数据
    //     upsert: true,
    //     // 返回修改后的数据
    //     new: true,
    //     // 若添加数据的话就要设置一些默认数据
    //     setDefaultsOnInsert: true
    // })


    // 查询
    // $where 添加一个约束条件，值是一个用于数据库查询的js脚本，脚本里写一个布尔表达式
    // let r = await Game.find({/*$where: `this.updatedAt === this.createdAt`*/}, '-platform -price', {
    //     sort: {updatedAt: -1},
    //     skip: 1,
    //     limit: 2
    // })

    // 判断是否存在符合条件的数据
    // let r = await Game.exists({name: 'Start Craft'})

    // 查询数量
    // let r = await Game.count({platform: 'PC'})

    let r = await Game.aggregate([
        // $match 用来过滤数据
        {$match: {price: {$gt: 300}}},
        // 数组中每个对象是一个聚合的条件
        // 其中 $group 必填
        // _id: 代表用什么字段进行分组，可以写 null 代表不分组
        // $avg: 是内置的命令，用来求字段的平均值
        {$group: {_id: "$platform", avgPrice: {$avg: "$price"}}},
        // $count 用于统计数量
        // { $count: 'total' },
    ])

    console.log(r)
})()