// var _sum = 0

// // 求平均数
// // 参数是个数组
// function avg(arr) {
//     _sum = arr.reduce((p, n) => p + n)
//     return _sum / arr.length
// }

// 求平均数
// 参数是个数组
const avg = (function () {
    let _sum
    return (arr) => {
        _sum = arr.reduce((p, n) => p + n)
        return _sum / arr.length
    }
})()