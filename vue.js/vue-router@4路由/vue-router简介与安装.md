# vue-router简介与安装

[官网](https://router.vuejs.org/)

## 什么是 vue-router?

vue-router 是基于 vue 核心库的一个页面切换工具, 他的核心功能就是单页应用程序的多个页面间的切换

单页应用程序(SPA Simple Page Application): vue 通过 createApp 函数，只创建了一个 app 对象，那么这样的应用程序就是 SPA

多页应用程序: 一个项目中存在多个 createApp 产生的 app 对象，这就是一个多页应用程序

所以，vue-router 本质上是页面元素的替换，而不是 html 页面的跳转

## 安装

```shell
# @4 代表安装 4.x 的版本，4以上版本才支持 vue3
npm i vue-router@4
```

安装完后需要配置 vue-router

配置步骤：

- 创建 `vue-router` 配置文件 `router/index.js`
- 在 `main.js` 中安装插件
- 创建路由视口 `<router-view>`
