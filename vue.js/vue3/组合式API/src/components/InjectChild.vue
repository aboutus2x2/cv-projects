<script setup>
import {inject, ref} from 'vue'

// 获取注入的数据
// 第一个参数: 注入数据的名称
// 第二个参数: 默认值
// 返回一个由供应商提供的参数值
const theme = inject('theme', '这是默认值')
</script>

<template>
    <div>
        <h1>InjectChild</h1>
        <div>收到的主题是: {{ theme }}</div>
    </div>
</template>

<style scoped>

</style>