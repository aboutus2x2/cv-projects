// 知识点
// loader 是什么
// 加载 css 文件
//      1. 安装 css-loader 和 style-loader (使用 npm i -D 安装)
//      2. 配置 module
// 加载图片或其他文件
//      1. 安装 file-loader
//      2. 配置 module


// loader 是什么？
// 由于webpack只知道如何处理js文件，所以项目中引入的其他文件都需要使用loader进行加载，loader的作用就是告诉webpack如何加载文件

const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: path.resolve(__dirname, '../src/loader的使用.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 配置模块
    module: {
        // 加载文件的规则
        rules: [
            {
                // 正则表达式，用于匹配符合条件的文件
                test: /\.css$/,
                // 若匹配文件成功，则使用 use 中的loader进行加载
                use: [
                    // 样式加载时，loader的顺序很重要
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: ['file-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // 添加一个适配vue的插件
    plugins: [
        new VueLoaderPlugin()
    ]
}