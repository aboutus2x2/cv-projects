# ant-design-vue简介

官网：<https://www.antdv.com/docs/vue/introduce-cn>

ant-design 是蚂蚁金服开发的一套以 react 为核心的 ui 库，ant-design 的 vue 版本就叫 ant-design-vue

## ui 框架推荐

[material design](https://m3.material.io/)

[element-ui](https://element.eleme.cn/#/zh-CN)

[iview](https://www.iviewui.com/)

[vuetify](https://vuetifyjs.com/en/)

[material design bootstrap](https://mdbootstrap.com/)

[material ui](https://mui.com/)

## 安装

### 1. npm 安装

```shell
# npm 安装
npm i ant-design-vue
```

### 2. 引入样式

```js
// main.js 中引入样式
import 'ant-design-vue/dist/antd.css';
```

### 3. 全局安装

```js
// main.js 中安装插件
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
// 引入样式
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

// 安装插件
app.use(Antd).mount('#app');
```

### 4. 局部安装

```vue
<template>
  <!-- 使用组件 -->
  <a-button>Add</a-button>
</template>
<script>
  import { Button } from 'ant-design-vue'; // 引入需要安装的组件
  const ButtonGroup = Button.Group;

  export default {
    // 注册组件
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
  };
</script>
```

## 学习路径

学习以下内容来掌握 ant-design-vue 的重点

1. 布局组件
2. 表单组件
3. 表格组件
4. 其余组件按需求进行使用
   1. 导航组件
   2. 数据显示组件
   3. 反馈组件
   4. 其他

## 学习方法

- 有demo看demo
- 没有demo看API
- 没有API看源代码
