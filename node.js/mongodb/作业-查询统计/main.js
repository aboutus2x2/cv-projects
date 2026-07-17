const mongoose = require('mongoose')
const {model, Schema} = mongoose;
const Student = require('./models/students');

(async () => {
    // 创建数据库连接
    const db = mongoose.connection
    db.on('error', err => {
        console.error(err)
    })
    await mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/work2')
    console.log('数据库连接成功')

    // 判断数据库是否有数据
    let r = await Student.count()
    // 没有数据才插入学生
    if (r === 0) {
        for (let i = 0; i < 100; i++) {
            if (i < 50) {
                await Student.create({sex: 'male', score: Math.round(Math.random() * 100)})
            } else {
                await Student.create({sex: 'female', score: Math.round(Math.random() * 100)})
            }
        }
    }

    // 请统计出男生中的最高分和女生中的最高分
    // r = await Student.find({sex: 'female'}, null, {
    //     sort: {score: -1},
    //     limit: 1
    // })

    // 利用聚合函数进行统计
    // r = await Student.aggregate([
    //     // 分组
    //     // 按 _id 性别进行分组
    //     // $max 查询分数的最大值
    //     {$group: {_id: '$sex', max: {$max: '$score'}}}
    // ])


    // console.log(r)

    // 通过mapReduce统计男生女生最差3个人的成绩
    // r = await Student.mapReduce({
    //     map: function () {
    //         emit(this.sex, {
    //             sex: this.sex,
    //             score: this.score,
    //             maleRank: this.sex === 'male' ? [this] : [],
    //             femaleRank: this.sex === 'female' ? [this] : [],
    //             record: this
    //         })
    //     },
    //     reduce: function (key, values) {
    //         return values.reduce((p, n) => {
    //             // 添加当前数据到数组中
    //             if (n.sex === 'male') {
    //                 p.maleRank.push(n.record)
    //             } else {
    //                 p.femaleRank.push(n.record)
    //             }
    //             // 按分数进行排序
    //             // 按分数进行升序排列
    //             // 截取数组
    //             p.maleRank = p.maleRank.sort((p1, p2) => p1.score - p2.score).slice(0, 3)
    //             p.femaleRank = p.femaleRank.sort((p1, p2) => p1.score - p2.score).slice(0, 3)
    //             return p
    //         })
    //     }
    // })
    // console.log(r)
    // console.log(r.results[0].value)
    // console.log(r.results[1].value)


    // 聚合函数统计最差3人
    r = await Student.aggregate([
        {$group: {_id: '$sex', rank: {$minN: {input: ['$score', '$name'], n: 3}}}}
    ])
    console.log(r)
    console.log(r[0].rank)
    console.log(r[1].rank)
})()