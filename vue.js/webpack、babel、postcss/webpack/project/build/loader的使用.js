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