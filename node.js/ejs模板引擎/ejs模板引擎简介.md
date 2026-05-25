# ejs模板引擎简介

## 什么是模板引擎

### 模板
要了解模板引擎需要先了解模板

模板就是一个用于生成html文件的有独特语法的文件

例如：我们也可以自己写个模板名为 template.rgb 的模板

```html
<html>
<head></head>
<body>
    <!-- 此处就是模板语法 -->
    <div>${user.name}</div>
</body>
</html>
```

然后我们自己写个函数将他转换成html，如：

```js
// 定义个渲染函数，用于将模板转换成html
function render(templateName, params) {
    // 转化过程写在这里
}

// 调用渲染函数，将模板和对应的数据传入函数
// 函数将返回html内容
let html = render('template.rgb', {user: {name: '法外狂徒张三'}})
```

上述模板最终会被翻译成html，如下：
```html
<html>
<head></head>
<body>
    <!-- 此处就是转换出来的内容 -->
    <div>法外狂徒张三</div>
</body>
</html>
```

### 模板引擎是什么
模板引擎就是用于解释翻译模板的工具，例如上述例子中的render函数，应该由模板引擎提供

## 模板引擎ejs
ejs 是个被许多框架使用的模板引擎

github: https://github.com/mde/ejs

### 安装与使用
```batch
# 安装
npm install ejs
```

使用流程
- 创建模板文件.ejs
- 引入ejs模块
- 编译模板
- 返回html内容

代码参考《ejs-project》的 `ejs-demo.js`

### express 中集成 pug
代码参考《ejs-project》的 `ejs-express.js`