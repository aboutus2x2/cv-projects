<script setup>
import {ref} from 'vue'

const name = ref('张三')
const sex = ref('male')

function changeSex(_sex) {
    sex.value = _sex
}

// 使用 defineExpose 暴露子组件中的属性或函数
// 以 define 开头的函数 在 <script setup> 标签中不需要引入
defineExpose({name, sex, changeSex})
</script>

<template>
    <div>
        <div>name: {{ name }}</div>
        <div>sex: {{ sex }}</div>
    </div>
</template>

<style scoped>

</style>