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


5、公共特征

#### display

参考：[display 属性 · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/display/)

```
d-{value} for xs
d-{breakpoint}-{value} for sm, md, lg, xl, and xxl

/*value可以是以下值：*/
none
inline
inline-block
block
grid
table
table-cell
table-row
flex
inline-flex
```

![](file://C:\Users\archerswet\Desktop\高级特效开发\md-img\4-5-1.jpg?msec=1672969831024)

【案例】

根据4中的作业，利用d-修改网格布局结构

#### float

参考[Float · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/float/)

```
float-{value}
float-{breakpointer}-{value}

/*value可以是以下值：*/
start
end
none
```

#### postiion

参考:[Position · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/position/)

positon属性在bootstrap中的设置

```html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

```
位置属性：
top
start （替代left）
bottom
end （替代right）

属性值:
0 (百分之0,意思是首位)
50 (百分之50,意思是中部位置)
100 (百分之100,意思是尾部位置)

平移属性：
translate-middle (xy平移 -50%宽高) 
translate-middle-x (x平移 -50%宽)
translate-middle-y (y平移 -50%高)
```

【案例】

![](file://C:\Users\archerswet\Desktop\高级特效开发\md-img\4-5-3.jpg?msec=1672969830968)

在按钮中添加消息提示

#### flex

参考：[Flex · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/flex/)

```
d-{breakpointer}-{inline}-flex


flex-{breakpointer}-{row|column}-{reverse}


justify-content-{breakpointer}
-{start|end|center|between|around|evenly}


align-items-{breakpointer}
-{start|end|center|baseline|stretch}


align-self-{breakpointer}
-{start|end|center|baseline|stretch}
```

#### color

参考：[Colors · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/colors/)

```
text-{color}
bg-{color}
btn-{color}
link-{color}

color的值为：
primary
secondary
success
danger
warning
info
light
dark
body
muted
white
black-50
white-50
```

#### sizing

参考：[尺寸（Sizing） · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/sizing/)

```
百分比宽高：
w-25
w-50
w-75
w-100
w-auto
h-25
h-50
h-75
h-100
h-auto

视口(viewport)百分比宽高：
min-vw-100
min-vh-100
vw-100
vh-100
```

#### spacing

参考：[Spacing · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/spacing/)

```
m    margin
p    padding
___
t    top
b    bottom
s    start
e    end
x    left & right
y    bottom & top
___
0
1
2
3
4
5
auto
```

#### stacks

参考：[Stacks · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/helpers/stacks/)

```
vstack gap-{number}
hstack gap-{number}
--number--
0
1
2
3
4
5
```

#### text

参考：[Text · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/utilities/text/)

```
text-{breakpointer}-{start|center|end}
text-{wrap|nowrap}
text-break
text-{lowercase|uppercase|capitalize}

---

fs-{number}
fw-{bold|bolder|semibold|normal|light|lighter}
fst
lh-{number|sm|base|lg}
---
text-decoration
```

##

## 6、表单（Form）

参考：[Form controls · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/forms/form-control/)

#### from-control

```html
<input class="form-control" />
<input class="form-control from-lg|sm" />
<input class="form-control" disabled/>
<input class="form-control" disabled readonly/>
```

#### select

参考：[Select · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/forms/select/)

```html
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

#### checks & radios

参考：[Checks and radios · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/forms/checks-radios/)

```html
<div class="from-check">
    <input class="form-check-input" type="checkbox" value="" id="formCheck" />
    <label class="form-check-label" for="formCheck">default check</label>
</div>
<div class="from-check">
    <input class="form-check-input" type="checkbox" value="" id="formCheck2" />
    <label class="form-check-label" for="formCheck2">item check</label>
</div>
```

```html
<div class="from-check">
    <input class="form-check-input" type="radio" name="sex" id="formSexMale" />
    <label class="from-check-label" for="formSexMale" checked>Boy</label>
</div>
<div class="from-check">
    <input class="form-check-input" type="radio" name="sex" id="formSexFeMale" />
    <label class="from-check-label" for="formSexFeMale">Girl</label>
</div>
```

## 7、组件 (Component)

#### button

参考：[Buttons · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/components/buttons/)

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```

#### button group

参考：[Button group · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/components/button-group/)

```html
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

#### Card

参考：[卡片（Cards） · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/components/card/)

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

#### dropdowns

参考：[Dropdowns · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/components/dropdowns/)

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

#### modal

参考：[Modal · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)](https://v5.bootcss.com/docs/components/modal/)

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

#### navbar

参考：[Navbar · Bootstrap v5 中文文档 v5.2 | Bootstrap 中文网 (bootcss.com)
