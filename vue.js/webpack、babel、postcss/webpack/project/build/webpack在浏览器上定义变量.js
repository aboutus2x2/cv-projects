const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {DefinePlugin} = require('webpack')
const fsp = require('fs/promises')

// webpack 的配置对象可以通过一个工厂函数来返回
module.exports = async (env, mode) => {
    const data = await fsp.readFile(path.resolve(__dirname, '../abc.txt'))

    return {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, '../dist')
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new CleanWebpackPlugin(),
            // 定义变量到浏览器上
            new DefinePlugin({
                // 参数需要序列化
                'FOO': JSON.stringify(data.toString())
            })
        ]
    }
}