## webpack 搭配使用

#### 创建webpack项目
- 安装webpack、webpack-cli
- 创建webpack.config.js

#### 创建webpack基本配置
```js
const path = require('path')

module.exports = {
    entry: './src/index.js', // 按照自己喜好添加出入口
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    }
}
```

#### 书写新语法特性的js文件
```js
class Car {
    name
    category

    constructor(name, category) {
        this.name = name
        this.category = category
    }

    shout() {
        console.log('baba')
    }

    message(msg) {
        console.log(`this is message: ${msg}`)
    }
}

let car = new Car('xiao che', 'TOYOTA')

car.shout()
car.message('xiao xi')

export default Car
```

此时通过webpack打包，会报错，因为webpack处理不了牛逼的js语法

#### 换个姿势再来一次
安装babel
```
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev babel-loader
```

#### 编写babel的配置文件
创建babel.config.js
```js
module.exports = {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [ // babel 插件 用于翻译class语法
        "@babel/plugin-proposal-class-properties"
    ]
}
```

#### 修改webpack配置
添加babel-loader
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
```

#### 打包
```
npx webpack --config webpack.config.js
```