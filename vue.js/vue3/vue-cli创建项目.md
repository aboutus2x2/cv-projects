# @vue/cli 创建项目

官网: <https://cli.vuejs.org/zh/index.html>

cli: command line interface 命令行接口

vue-cli 是一个命令行接口(脚手架)，作用是用来创建一个 vue 的 node.js 项目

## 安装 vue-cli

```shell
# 任意目录下执行以下命令，安装 vue-cli 命令行接口
npm i -g @vue/cli
```

## 创建项目

### 使用 vue create 命令

```shell
# project-name: 项目名称
vue create <project-name>
# 选择第一个预设 default [vue 3] babel eslint
```

### 使用 vue ui 命令

```shell
# 使用 vue ui 命令 创建一个服务器 用界面方式创建项目
vue ui
# 地址：http://localhost:8000
```

## 项目结构

项目目录结构如下：

- public 存放项目index.html模板相关文件
- src 源文件夹，开发人员写代码的地方
  - assets 资源文件夹，页面上显示用的文件资源
  - components 组件所在文件夹
  - views/pages 存放页面的文件夹
  - App.vue 页面的入口(主页面)
  - main.js 程序的主入口(js代码先从该文件开始运行)
- babel.config.js babel的配置文件
- jsconfig.js js文件编译配置
- package.json node.js的项目文件
- package-lock.json 项目依赖的版本配置文件
- vue.config.js @vue/cli的配置文件

## 脚本命令

在 `package.json` 中，有以下三个 `scripts`

- serve: 启动开发服务器，起到一个预览的作用
- build: 输出可用的 html 项目
- lint: 检测代码质量
