## loader 使用
webpack自身只能识别处理js文件，所以项目依赖中存在js以外的文件时，需要使用loader告诉webpack如何处理这些非js文件

### 项目中引入CSS文件

#### 安装loader
```shell script
# 安装样式的加载器
npm install --save-dev style-loader css-loader
```

#### 修改配置文件
```js
const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: { // 添加模块配置
        rules: [
        {
            test: /\.css$/, // 配置检测文件用正则
            use: [ // 配置使用的loader
                'style-loader',
                'css-loader'
            ]
        }
        ]
    }
  };
```

#### 创建并引入样式
创建css
```css
.hello {
    color: red;
}
```
修改js
```js
import _ from 'lodash'
import './style.css'

function component() {
    const element = document.createElement('div')

    // 现在 "_" 有明确的依赖引入了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    // 加入样式
    element.classList.add('hello')

    return element
}

document.body.appendChild(component())
```

#### 再次打包
```
npm run build
```

### 项目中引入图片文件

#### 安装loader
```
npm install --save-dev file-loader
```

#### 修改配置
```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
```

#### 修改js
```js
import _ from 'lodash'
import './style.css'
import catImage from './cat.jpg'

function component() {
    const element = document.createElement('div')

    // 现在 "_" 有明确的依赖引入了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    // 加入样式
    element.classList.add('hello')

    return element
}

function imageComponent() {
    const img = document.createElement('img')
    img.src = catImage

    return img
}

document.body.appendChild(component())
document.body.appendChild(imageComponent())
```

#### 再次打包
```
npm run build
```