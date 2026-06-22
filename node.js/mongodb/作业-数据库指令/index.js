// - 以下内容通过 mongo shell 命令完成
// - 请将 games.js 中的数据，添加到名为 game_store 的数据库的 games 集合中


// - 请查询价格小于400的游戏
db.games.find({ price: { $lt: 400 } })

// - 请查询所有数据，按照价格进行排序，并查询第二页数据，每页显示3条数据
db.games.find({}).sort({ price: -1 }).limit(3).skip(3)

// - 请查询游戏名字包含 War 的游戏
db.games.find({ name: { $regex: /^[\s\S]*War[\s\S]*$/ } })

// - 请查询游戏平台不是 FC 的游戏
db.games.find({ platform: { $ne: 'FC' } })

// - 请查询 PS 平台下的游戏数量
db.games.count({ platform: 'PS' })

// - 请查询 XBOX 和 PS 平台的所有游戏
db.games.find({ $or: [{ platform: 'XBOX' }, { platform: 'PS' } ] })
db.games.find({ platform: { $in: ['XBOX', 'PS'] } })

// - 请修改 Super Mario Bros 的价格为 550
db.games.updateOne({ name: 'Super Mario Bros'}, { $set: { price: 550 } })

// - 请删除 God Of War 和 Gears Of War
db.games.deleteMany({ name: { $in: ['God Of War', 'Gears Of War'] } })