// 在 mongodb 控制台中可以执行下列代码

// - $eq: 匹配相等记录
db.game.find({
    name: { $eq: 'game1' }
})

// - $gt、$gte: 匹配大于、大于等于的记录
db.game.find({
    price: { $gt: 5 }
})

db.game.find({
    price: { $gte: 5 }
})

// - $in：匹配指定范围中的记录
db.game.find({
    price: { $in: [5, 10] }
})

// - $lt、$lte：匹配小于、小于等于的记录
db.game.find({
    price: { $lt: 10 }
})

db.game.find({
    price: { $lte: 10 }
})

// - $ne：匹配不等于指定值的记录
db.game.find({
    price: { $ne: 10 }
})

// - $nin：匹配不在范围中的记录
db.game.find({
    price: { $nin: [5, 11] }
})

/////// 以下是逻辑运算符 ///////

// 且运算
db.game.find({
    $and: [{ price: { $gt: 5 } }, { price: { $lt: 15 } }] // 筛选价格字段大于5小于15的记录
})

// 或运算
db.game.find({
    $or: [{ price: { $lte: 5 } }, { price: { $gt: 10 } }] // 筛选价格字段小于等于5或大于10的记录
})

/////// 以下是表达式查询器 ///////
db.game.find({
    name: { $regex: /^(\s|\S)*good(\s|\S)*$/ } // 筛选名称中带good的记录
})