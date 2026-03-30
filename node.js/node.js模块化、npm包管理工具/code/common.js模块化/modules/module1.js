let name = '张三'

function add(x, y) {
    return x + y
}

// 使用 exports 进行导出
exports.username = name
exports.add = add


// 通过 给 module.exports 赋值 来导出任意内容
// 注意: module.exports 通常写到代码的最下方
// module.exports = '123hello'

// module.exports = {
//     name, add
// }


// module.exports 和 exports 是什么关系?
// exports 是 module.exports 的直接引用
console.log(module.exports === exports)