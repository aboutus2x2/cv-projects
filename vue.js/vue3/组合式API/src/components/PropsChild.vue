<script setup>
import {ref} from 'vue'

// 声明props

// 使用数组定义props
// defineProps(['name', 'sex', 'age'])
// props 校验
// defineProps 返回数据为传入的参数
const {name, sex, age} = defineProps({
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

// 可以通过 defineProps 的返回值充当响应式属性的初始值
const na = ref(name)

</script>

<template>
    <div>
        <h1>props</h1>
        <div>name: {{ name }}</div>
        <div>sex: {{ sex }}</div>
        <div>age: {{ age }}</div>

        <h2>{{ na }}</h2>
        <input type="text" v-model="na">
    </div>
</template>

<style scoped>

</style>