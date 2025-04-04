// 知识点
// 什么是插件
// CleanWebpackPlugin 清空dist目录插件
// HtmlWebpackPlugin 用于自动创建index.html文件


// 什么是插件？
// 提供一些 webpack 的辅助功能的 js 模块就是插件

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // 插件配置
    plugins: [
        // 插件通常 new 一个实例对象
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 标题
            // title: '我的webpack应用'
            template: path.resolve(__dirname, '../public/index.html'),
            // ejs的模板参数
            templateParameters: {title: '这是我的模板参数的Title'}
        }),
        new VueLoaderPlugin()
    ]
}