// mapReduce 运算模型是拿来做大数据统计的
// 要统计出结果，需要经历 map 和 reduce 两个步骤
// 1. map 的作用 用于返回统计结果所需的数据结构
// 2. reduce 的作用就是具体的统计逻辑
// reduce api: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let arr = [
    {
        name: '李四666',
        score: 45,
        sex: 'female'
    },
    {
        name: '张三1',
        score: 45,
        sex: 'male'
    },
    {
        name: '李四1',
        score: 89,
        sex: 'female'
    },
    {
        name: '老王1',
        score: 48,
        sex: 'male'
    },
    {
        name: '张三2',
        score: 65,
        sex: 'female'
    },
    {
        name: '李四2',
        score: 32,
        sex: 'female'
    },
    {
        name: '老王2',
        score: 17,
        sex: 'male'
    }
]

// 1. 统计上述数组中不及格的人数

// 2. 统计总分和平均分

// 3. 按男女统计分数最低的两个人
