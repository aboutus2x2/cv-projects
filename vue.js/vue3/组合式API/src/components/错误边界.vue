<script setup>
import {onErrorCaptured, ref} from 'vue'

// 定义异常捕获声明周期

// 错误可以从以下几个来源中捕获：
//
// 组件渲染
// 事件处理器
// 生命周期钩子
// setup() 函数
// 侦听器
// 自定义指令钩子
// 过渡钩子
onErrorCaptured((err, instance, info) => {
    console.log('接收到异常')
    console.error(err)
    console.log(instance)
    console.log(info)

    // 设置flag
    hasError.value = true
})

// 声明一个变量来表示是否捕获到异常
const hasError = ref(false)
</script>

<template>
    <div>
        <!-- template 标签的作用类似 微信小程序中的 block 标签，用于分组 -->
        <template v-if="!hasError">
            <!-- 若没有异常就显示匿名插槽的内容 -->
            <slot></slot>
        </template>
        <template v-else>
            <!-- 若出现异常 可以在错误边界组件中添加友好的错误提示 -->
            抱歉，您的页面走失了，请稍后再试
        </template>
    </div>
</template>

<style scoped>

</style>