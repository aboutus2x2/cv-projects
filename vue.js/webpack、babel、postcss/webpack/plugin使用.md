## plugin使用
插件有很多，代码丑化插件，代码压缩插件，模板生成插件等，能够丰富扩展我们的项目功能

### clean-webpack-plugin 清空webpack输出路径插件

#### 安装
```
npm install clean-webpack-plugin --save-dev
```

#### 配置插件
```js
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    }
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```

#### 运行打包
```
npm run build
```
打包完成后发现 output 路径下其他文件都不见，只剩下打包完成的文件

### HtmlWebpackPlugin html模板插件

#### 安装
```
npm install --save-dev html-webpack-plugin
```

#### 配置
```js
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'html 模板插件'
        })
    ]
}
```

#### 打包
```
npm run build
```
打包后会发现自动创建了一个html文件
