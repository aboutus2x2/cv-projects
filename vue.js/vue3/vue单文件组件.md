# vue单文件组件(Simple File Component 缩写 SFC)

vue 项目中 `.vue` 文件就是一个 单文件组件，该文件描述了一个独立组件

## 应用场景

在 `node.js` 创建的 `vue` 项目中，通常都是使用单文件组件来声明组件

## .vue 文件构成

```vue
<!-- template 是组件的模板 负责描述组件的样子 -->
<template>
    <!-- 建议只写一个根节点 -->
    <div>
        Hello World !!!
    </div>
</template>

<script>
    // 脚本写在这里

    // 导出的内容就是组件的配置
    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){}
    }
</script>

<script setup>
    // 此处代表组件的 setup 声明周期
</script>

<!-- scoped 可以限制样式只在组件内生效 -->
<style scoped>
/* 样式写在这里 */
</style>
```

> `<template>` 标签是 html 的一个新的标签，他的作用类似 `React.Fragment` 或小程序 `block`
