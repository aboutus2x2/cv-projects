<template>
    <div>
        <AsyncComponent></AsyncComponent>
    </div>
</template>

<script>

// 知识点：
// 什么是异步组件？
// 应用场景
// 声明异步组件


// 什么是异步组件？
// 异步组件用于异步加载，并非页面打开立即加载，只有当使用该组件时才会加载

// 应用场景
// 只要不是打开页面时立即需要加载的内容，都可以成为异步组件
// 特别常见的一个异步组件的应用场景就是配合 vue-router 实现页面懒加载

// import AsyncComponent from "@/components/AsyncComponent";
// 导入 defineAsyncComponent 函数
import {defineAsyncComponent} from "vue";

// 该函数参数是回调函数
// 返回值就是一个异步的组件配置
const AsyncComponent = defineAsyncComponent(() => {
    // 回调函数中需要使用 import 异步导入一个组件
    // es 模块化的异步导入
    return import('@/components/AsyncComponent')
})

export default {
    components: {
        AsyncComponent
    },
    data() {
        return {};
    }
};
</script>

<style scoped>

</style>