// 要求: 使用 map reduce 方法，分别统计出 男生和女生的分数的品均数

let arr = [
    {
        name: '张三',
        sex: 'male',
        score: 5
    },
    {
        name: '老王',
        sex: 'male',
        score: 10
    },
    {
        name: '小红',
        sex: 'female',
        score: 5
    },
    {
        name: '李四',
        sex: 'female',
        score: 25
    },
]

// 要使用 reduce 有一个特点，所有参与 reduce 运算的数组成员和返回值，其数据结构因该一样
// 所以使用 reduce 前因该先用 map 来构造相同的数据结构

// 声明一个最终结构
let r = {
    sex: '',
    score: 0,
    // 男生平均分
    maleAvg: 0,
    maleTotal: 0,
    maleCount: 0,
    // 女生平均分
    femaleAvg: 0,
    femaleTotal: 0,
    femaleCount: 0
}

r = arr.map(stu => ({
    sex: stu.sex,
    score: stu.score,
    maleAvg: 0,
    maleTotal: 0,
    maleCount: 0,
    femaleAvg: 0,
    femaleTotal: 0,
    femaleCount: 0
})).reduce((p, n) => {
    // p 代表上一次统计结束后的对象
    // n 代表本次要统计的数据

    if (n.sex === 'male') {
        p.maleCount++
        p.maleTotal += n.score
        p.maleAvg = p.maleTotal / p.maleCount
    } else if (n.sex === 'female') {
        p.femaleCount++
        p.femaleTotal += n.score
        p.femaleAvg = p.femaleTotal / p.femaleCount
    }

    // 返回统计结果，用于下一次统计运算
    return p
}, r) // 添加第二个reduce 参数，将统计结果存放到 r 中

console.log('男生平均分: ', r.maleAvg);
console.log('女生平均分: ', r.femaleAvg);