<script setup>
// 知识点：
// 声明供应商
// 声明消费者

import {provide, ref} from 'vue';
import InjectChild from '@/components/InjectChild'

// 响应式数据
const theme = ref('light')

// 通过provide函数提供数据
provide('theme', theme)
</script>

<template>
    <div>
        主题模式:
        <select v-model="theme">
            <option value="light">亮色主题</option>
            <option value="dark">暗色主题</option>
        </select>

        <InjectChild></InjectChild>
    </div>
</template>

<style scoped>

</style>