const path = require('path');

module.exports = {
    // 入口
    // entry: path.resolve(__dirname, '../src/入口和出口.js'),
    // 多入口
    entry: {
        // key: 入口名称
        // value: 入口文件的路径
        app: path.resolve(__dirname, '../src/入口和出口.js'),
        otherOne: path.resolve(__dirname, '../src/other.js')
    },
    output: {
        // 文件名
        // 若有多个入口文件，则文件名可以添加 [name] 作为占位符
        // [name]: 入口名称
        filename: 'example.[name]-config.js',
        // 输出文件夹
        path: path.resolve(__dirname, '../output')
    }
}