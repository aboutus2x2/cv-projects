const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    // 入口
    entry: path.resolve(__dirname, '../src/main.js'),
    // 出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 定义loader
    module: {
        rules: [
            // 配置 css 相关 loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 配置图片引入的 loader
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            // 配置 vue-loader
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['.js', '.vue', '.png', '.jpg', '.css']
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 模板路径
            template: path.resolve(__dirname, '../public/index.html'),
            // 模板参数
            templateParameters: {
                title: '我的vue项目'
            }
        }),
        new VueLoaderPlugin()
    ]
}
