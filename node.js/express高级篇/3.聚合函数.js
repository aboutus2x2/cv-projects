// 什么是聚合函数
// 聚合函数用于统计，将多条数据聚合成少量数据


// 通过聚合函数，筛选出名字中包含 good 的游戏，并根据游戏平台进行分类，求这些游戏价格的品均值
db.game.aggregate([
    { $match: { name: { $regex: /^[\s\S]*goods[\s\S]*$/ } } },
    { $group: { _id: "$platform", avg: { $avg: "$price" } } }, // 这里累加器使用的是$avg求平均值，可以按照业务替换
    // { $group: { _id: "$platform", total: { $sum: "$price" } } } // 这里就是求和
    // { $count: 'total' }, 
], /*{ explain: true }*/) // 显示聚合信息


db.game.aggregate([
    { $match: { name: { $regex: /^[\s\S]*War[\s\S]*$/ } } },
    { $group: { _id: "$platform", avg: { $avg: "$price" } } },
])

// 官网
// $group: https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/group/

db.games.aggregate([
    // $match 用来过滤数据
    { $match: { price: { $gt: 300 } } },
    // 数组中每个对象是一个聚合的条件
    // 其中 $group 必填
    // _id: 代表用什么字段进行分组，可以写 null 代表不分组
    // $avg: 是内置的命令，用来求字段的平均值
    { $group: { _id: "$platform", avgPrice: { $avg: "$price" } } },
    // $count 用于统计数量
    // { $count: 'total' },
], { explain: true }) // explain: 显示本次聚合查询的信息
