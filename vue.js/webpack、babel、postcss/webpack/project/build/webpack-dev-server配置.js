// 知识点
// 什么时 webpack-dev-server
// 安装 webpack-dev-server
// 配置 webpack-dev-server
// 通过命令 npx webpack-dev-server 运行，例如: npx webpack-dev-server --config build/webpack-dev-server配置.js --mode=development


// 什么时 webpack-dev-server
// 一个用于开发页面时的服务器，该服务器可以实现自动更新页面

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
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.jsx', '.vue']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ],


    // 开发服务器的配置
    devServer: {
        // 静态资源配置
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        // 端口号
        port: 3306,
        // 是否压缩资源
        compress: true
    }
}
