<script setup>
// 知识点：
// 了解有哪些生命周期钩子函数 https://cn.vuejs.org/api/composition-api-lifecycle.html
//    对比 选项式API 少了 setup 和 create 的过程
// 基于 onErrorCaptured 的错误边界


// 什么是错误边界
// 模板中一个用于捕获异常的组件

import {onBeforeMount, onMounted} from "vue";

// 组合式API中引入组件就等于注册组件
import ErrorBounder from '@/components/错误边界'
import ErrorChild from '@/components/ErrorChild'

// 声明周期钩子函数中填入回调函数就可以了
onBeforeMount(() => {
    console.log('before mount')
})

onMounted(() => {
    console.log('mounted')
})
</script>

<template>
    <div class="main">
        <ErrorBounder>
            <ErrorChild></ErrorChild>
        </ErrorBounder>
    </div>
</template>

<style scoped>

</style>
