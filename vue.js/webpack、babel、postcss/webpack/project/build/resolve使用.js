// 知识点 https://webpack.docschina.org/configuration/resolve/
// 什么是resolve
// alias 配置别名
// extensions 配置扩展名

// 什么是resolve
// resolve 的作用就是告诉 webpack 如何解析模块

const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../src/resolve使用.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
      rules: [
          {
              test: /\.vue$/,
              use: ['vue-loader']
          }
      ]
    },
    // 解析模块的配置
    resolve: {
        // 给资源路径取别名
        alias: {
            // key: 别名
            // value: 路径
            '@': path.resolve(__dirname, '../src')
        },
        // 配置扩展名
        extensions: ['.js', '.jsx', '.vue']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
