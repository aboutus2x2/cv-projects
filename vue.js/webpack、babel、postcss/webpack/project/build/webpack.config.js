const path = require('path')

module.exports = {
    // 打包入口
    entry: './src/index.js',
    // 打包输出
    output: {
        // 输出的文件名
        filename: 'bundle.js',
        // 打包输出的目录
        path: path.resolve(__dirname, '../output')
    }
}