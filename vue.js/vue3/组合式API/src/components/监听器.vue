<script setup>
// 知识点：https://cn.vuejs.org/guide/essentials/watchers.html
// 基本用法
//   1. 监听ref属性
//   2. 监听reactive对象属性
//   3. 监听多组数据变化
// 深层监听器
// 停止监听器
// watchEffect

import {reactive, ref, watch, watchEffect} from 'vue';

const x = ref('');
const y = ref('');
const user = reactive({name: '张三', sex: 'male', age: 0});

// watch

// 1. 监听ref属性变化
// 第一个参数: 要监听的数据
// 第二个参数: 监听成功后的回调函数
// watch(x, (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })


// 2. 监听reactive对象属性
// 要使用工厂函数来充当数据源
// watch(() => user.name, (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })


// 利用工厂函数，可以监听互相关联的多个数据变化
// watch(() => ({sex: user.sex, age: user.age}), (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })


// 监听多组数据变化
// 数据源是一个数组，数组成员可以是 ref 属性，reactive 对象或对象属性，工厂函数
// watch([y, () => user.name, () => user.sex, () => user.age], (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })

// 深层监听器?
// 该监听器可以监听reactive对象中任意属性的变化
// 第一个参数填入一个reactive对象，就能实现深层监听
// watch(user, (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })


// 停止监听器
// watch函数有返回值，返回值是一个函数，用于取消监听
// const cancelWatch = watch(user, (newVal, oldVal) => {
//     console.log(newVal)
//     console.log(oldVal)
// })


// watchEffect
// 它的作用是：声明监听器时就立即执行一次回调，watch 和 watchEffect 的关系，类似于 while 和 doWhile 的关系
watchEffect(() => {
    console.log(x.value)
    console.log(y.value)
    console.log(user.name)
})

</script>

<template>
    <div>
        x: <input type="text" v-model="x"> y: <input type="text" v-model="y"><br>
        user.name <input type="text" v-model="user.name"> user.sex <input type="text" v-model="user.sex"> user.age
        <input
            type="text" v-model="user.age">
        <div>
            <button @click="cancelWatch">取消监听</button>
        </div>
    </div>
</template>

<style scoped>

</style>