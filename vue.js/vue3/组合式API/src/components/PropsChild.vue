<script setup>
import {ref} from 'vue'

// 声明props

// 使用数组定义props
// defineProps(['name', 'sex', 'age'])
// props 校验
defineProps({
    name: {
        required: true,
        type: String,
    },
    sex: {
        type: String,
        default() {
            return 'other'
        }
    },
    age: Number
})
</script>

<template>
    <div>
        <h1>props</h1>
        <div>name: {{ name }}</div>
        <div>sex: {{ sex }}</div>
        <div>age: {{ age }}</div>
    </div>
</template>

<style scoped>

</style>