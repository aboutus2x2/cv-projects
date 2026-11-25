<template>
    <div>
        <!-- 将组件当作标签使用 -->
        <child-component></child-component>
        <Child2></Child2>
        <global-component></global-component>
    </div>
</template>

<script>
// 知识点：
// 什么是组件？
// 应用场景
// 组件的定义
//    1. 使用组件配置进行定义
//    2. 使用 .vue 定义单文件组件
// 注册组件
//    1. 局部注册
//    2. 全局注册 全局注册的组件可以在任意位置使用 全局注册需要在 main.js 中注册
// 使用组件
// defineComponent 作用是为编辑器提供定义组件时的代码提示


// 什么是组件？
// 一个独立的封装的拥有页面元素和独立js方法还有样式的可复用模块就是一个组件

// 应用场景
// 为了复用代码，为了代码内聚

import {h, defineComponent} from 'vue'
import Child2 from "@/components/Child2.vue";

// 使用组件配置定义组件
const Child = defineComponent({
    // 组件中至少包含 render 或 template 用于渲染组件的样子
    // template: `<div>这是Child组件</div>`,
    render() {
        return h('div', null, [
            h('div', null, '这是Child组件')
        ])
    }
})

export default {
    name: 'BasicComponent',
    // 在一个组件的配置中，使用 components 来注册其他组件
    // 这就是局部注册
    // 局部注册的组件只能在当前组件中使用
    components: {
        // key: 对应组件名
        // value: 对应组件配置
        // key 的命名规范:
        // 1. 使用连字符的方式命名，所有英文小写，在html代码中是通用标准
        // 'child-component': Child
        // 2. 依照项目标准命名，例如，当前项目下其他的组件都是大驼峰式命名法
        ChildComponent: Child,
        Child2
    }
}
</script>

<style scoped>

</style>