# 将node.js进程中的数据通过webpack环境变量传递给浏览器进程

webpack 是运行在 node.js 进程中的程序，而我们的网页代码是运行在浏览器进程中的程序

有时我们想将 node.js 中的参数传递给浏览器中的网页，那么就需要用到 webpack 插件来定义环境变量

此处的例子，我们做如下的一个功能：在 node 进程中读取指定目录下的文件名数组，并通过 webpack 传递给浏览器进程

## 定义 webpack.config.js

```js
const path = require('path')
const fs = require('fs')
const {DefinePlugin} = require('webpack') // 引入 webpack 自带的插件 DefinePlugin

// 通过 node 函数读取文件夹
// files 是个数组
let files = fs.readdirSync(path.join(__dirname, 'src/files'))

module.exports = {
    ...
    plugins: [
        ...
        // 使用 DefinePlugin 定义环境变量
        new DefinePlugin({
            // 此处定义的 key 可以在浏览器进程中使用
            'FOO': JSON.stringify('hello'),
            'process.env.ok': JSON.stringify('world')
            'process.env.files': JSON.stringify(files)
        })
    ],
    ...
}
```

## 在浏览器的 js 模块中使用环境变量

```js
let foo = FOO // FOO 被赋值到了 window 中所以可以直接使用
let files = process.env.files
```
