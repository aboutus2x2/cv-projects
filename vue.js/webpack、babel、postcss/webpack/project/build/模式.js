// 知识点
// 什么是模式
// 如何设置模式
//      1. 通过配置项 mode 设置
//      2. 命令行中 通过 npx webpack --mode=development
// 页面或node环境中，可以通过 process.env.NODE_ENV 读取当前模式


// 什么是模式
// 打包的方式，分为两种: 
// development 开发模式，开发模式下打包内容可以进行调试
// production 生产模式，生产模式的内容用于项目的发布

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    // 模式
    // mode: 'development',
    entry: path.resolve(__dirname, '../src/模式.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}
