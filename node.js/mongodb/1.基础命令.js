// 在 mongodb 控制台中可以执行下列代码

// 单个插入
db.user.insertOne({
    "name": "Amy",
    "sex": "female",
    "age": 16
})

// 批量插入
db.game.insertMany([
    {
        name: 'game1',
        platform: 'pc',
        price: 5
    },
    {
        name: 'game2',
        platform: 'xbox',
        price: 10
    },
    {
        name: 'game3',
        platform: 'ps',
        price: 11
    },
])

// 单个删除
db.game.deleteOne({
    '_id': ObjectId("5f07be097580ae3b10c3e3e5")
})

// 批量删除
db.game.deleteMany({
    _id: {
        $in: [
            ObjectId("5f07be097580ae3b10c3e3e4"), 
            ObjectId("5f07bbbd7580ae3b10c3e3e3")
        ] 
    }
})

// 查询存在指定字段的记录
db.game.find({
    newField: { $exists: true }
})

// 分页查询
let page = 2 // 当前页
let size = 5 // 每页显示多少条数据

// find 函数的 第二个参数是映射结果集对象，作用是字段为true代表需要查询出来，为false代表不查询出来
db.game.find({}, { _id: false, a: false })
    .sort({ price: -1 }) // sort 排序: 按字段进行升序或降序排列，数字为正数时是升序，负数为降序
    .limit(size) // limit 查询数量
    .skip((page - 1) * size) // skip 跳过多少条数据不查询

// 修改
db.game.update({ _id: ObjectId("5f07d07a7580ae3b10c3e3f0") }, { // 指定查询条件
    $set: {                     // 通过 $set 对字段赋值
        "name": "ps good 2",
        "platform": "ps",
        "price": 23
    }
}, {
    upsert: true // 如果这条数据不存在就新增一条记录
})

// save保存
// 没有指定_id就插入一条新数据
db.game.save({
    name: 'save game',
    platform: 'ns',
    price: 25
})
// 有_id就覆盖文档
db.game.save({
    _id: ObjectId("5f0801237580ae3b10c3e3f2"),
    name: 'save game',
    platform: 'ns pro'
})

// 查询数据量
db.game.count({ name: { $regex: /^[\s\S]*张[\s\S]*$/}})

