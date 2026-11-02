<template>
    <div>
        <Clock :m="2" :s="45"></Clock>
        <Clock borderColor="#00f" :h="15" :m="24" :s="45"></Clock>
        <Clock borderColor="#f00" :h="23" :m="45" :s="50"></Clock>
    </div>
</template>

<script>
// 组件开发思路:
// 1. 页面当中相似的内容可以考虑做成一个组件
// 2. 制作静态页面
// 3. 将组件中不同部分的内容，通过 props 进行传参
// 4. 设计响应式属性并显示到页面中
// 5. 处理组件自身逻辑

import Clock from "@/components/作业-组件时钟/Clock";


export default {
    name: "workClock",
    // 局部注册
    components: {
        Clock
    }
}
</script>

<style scoped>

</style>