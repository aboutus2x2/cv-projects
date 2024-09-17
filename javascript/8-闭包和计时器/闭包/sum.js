// var _sum = 0

// // 求和
// // 参数是个数组
// function sum(arr) {
//     _sum = arr.reduce((p, n) => p + n)
//     return _sum
// }


const sum = (() => {
    let _sum
    return (arr) => {
        _sum = arr.reduce((p, n) => p + n)
        return _sum
    }
})()
