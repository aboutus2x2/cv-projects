## 1、bootstrap 介绍

官网：[https://getbootstrap.com/](https://getbootstrap.com/ "https://getbootstrap.com/")

中文临时网站：[Get started with Bootstrap · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/getting-started/introduction/)

`bootstrap` 的 `github` 地址：[GitHub - twbs/bootstrap: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.](https://github.com/twbs/bootstrap "https://github.com/twbs/bootstrap")

`bootstrap` 是一个用于制作页面界面的框架

框架: 提供一个标准和规范，再由开发人员自行填充内容

（注意：目前最新版本为5.2, 实际开发效果最好以最新版为主，避免渲染错误）

## 2、下载安装

#### 下载的文件说明：

[下载 Bootstrap · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/getting-started/download/)

#### 下载dist文件

或者在 `github` 中下载 `bootstrap` 源代码，源代码中的 `dist` 文件夹就是我们要用的文件

`npm` 安装

```shell
npm i bootstrap
```

#### 使用bootstrap

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
</head>

<body>
    <button type="button" class="btn btn-primary">Primary</button>
</body>

</html>
```

## 3、自定义主题

步骤如下：

1. 下载 `bootstrap` 源代码

       - 创建一个文件夹用于存放 `bootstrap` 源代码（建议使用英文文件夹）

       - 在文件夹中打开 `cmd`

       - 运行 `npm init -y`

       - 运行 `npm install bootstrap`

2. 根据需要修改 `node_modules/bootstrap/scss` 目录下的代码

3. 运行 `sass` 进行编译，重新编译 `bootstrap.scss` 文件

4. 输出 `bootstrap.css` 文件

#### 总结sass内容

## 4、布局

#### 响应式布局

响应式布局就是根据屏幕宽度，切换不同页面布局的一种布局方式，这里可以查看 bootstrap 官网在不同屏幕宽度下的表现

bootstrap 是使用断点来完成响应式布局的

#### 断点

[断点 · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/layout/breakpoints/)

断点是 bootstrap 面向不同屏幕宽度，预制好的媒体查询

通常的将，断点，代表的就是不同的屏幕宽度

bootstrap中如何体现断点，在class中，添加不同断点的名称，可以采用不同断点的样式

#### 布局容器

[Containers · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/layout/containers/)

通常是页面的根节点，使用 `class="container"` 来设置布局容器

布局容器受断点影响，可以设置不同断点上的容器，具体可查表：

#### 网格布局

[Grid system · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/layout/grid/)

[Columns · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/layout/columns/)

将内容进行行列分布的布局方式就叫网格布局

bootstrap中网格布局的灵魂样式就是 行：`row`，列：`col`
