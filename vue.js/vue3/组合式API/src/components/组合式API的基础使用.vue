<!-- 单文件据组件中，可以将 setup 生命周期写在页头的 <script setup> 标签中 -->
<script setup>
// 此处写入的代码本质上就是在 setup 生命周期运行的代码

import {ref} from "vue";


// 在 <script setup> 标签中定义的常量 变量或函数 都将能被模板直接使用
const count = ref(0)

function increase() {
    count.value++
}
</script>

<template>
    <div>
        <div>count: {{ count }}</div>
        <button @click="increase">+</button>
    </div>
</template>

<!--<script>
// 知识点
// 什么是组合式API
// 应用场景
// 组合式API的内容应该写在哪里


// 什么是组合式API
// 使用函数形式定义一个组件除模板以外的其他内容，就需要使用组合式API

// 应用场景
// 为了提升vue.js的性能，都可以考虑使用组合式API
// 为了写代码 写得方便写得爽

import {ref} from "vue";

export default {
    // data() {
    //     return {
    //         count: 0
    //     };
    // },
    // 使用 setup 声明周期书写组合式API
    setup() {
        // 创建响应式属性 count
        const count = ref(0)

        // 声明事件处理程序 increase
        function increase() {
            // 响应式属性通过 value 访问其值
            count.value++
        }

        // setup 声明周期中需要返回页面中用到的变量
        return {
            count,
            increase
        }
    },
    // methods: {
    //     increase() {
    //         this.count++
    //     }
    // }
};
</script>-->

<style scoped>

</style>