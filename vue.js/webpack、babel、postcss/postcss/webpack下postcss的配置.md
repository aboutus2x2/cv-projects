## webpack下postcss的配置
参考webpack教程 先配置好基础的webpack环境

#### 安装postcss-loader
```
npm i -D postcss-loader
```

#### 创建css和js
css
```css
.my-class {
    color: lch(53 105 40);
}

:fullscreen {
}
```
js
```js
import './main.css'

function component() {
    let el = document.createElement('div')
    el.innerHTML = `<span class="my-class">hello postcss</span>`
    return el
}

document.body.appendChild(component())
```

#### 创建dist下的index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
</body>
<script src="main.js"></script>
</html>
```

#### 修改webpack配置
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
}
```

#### 创建postcss.config.js
本次使用的插件，一个是语法预制环境，另一个是自动填充样式前缀
```js
module.exports = {
    plugins: [
        require('postcss-preset-env'),
        require('autoprefixer')
    ]
}
```
这是需要安装postcss-preset-env和autoprefixer
```
npm i -D postcss-preset-env
npm i -D autoprefixer
```

#### 打包查看效果
