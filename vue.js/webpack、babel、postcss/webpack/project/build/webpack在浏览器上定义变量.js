const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {DefinePlugin} = require('webpack')
const fsp = require('fs/promises')

// webpack 的配置对象可以通过一个工厂函数来返回
module.exports = async (env, mode) => {
    const data = await fsp.readFile(path.resolve(__dirname, '../abc.txt'))

    return {
        entry: path.resolve(__dirname, '../src/webpack在浏览器上定义变量.js'),
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, '../dist')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(),
            // 定义变量到浏览器上
            new DefinePlugin({
                // 参数需要序列化
                FOO: JSON.stringify(data.toString()),
                // 参数可以通过 . 点运算符进行索引
                'abc.xyz.msg': JSON.stringify('hello webpack'),
            }),
        ]
    }
}