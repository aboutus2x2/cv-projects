<script setup>
import {ref} from 'vue'
import MyForm from '@/components/作业-多表单控制/MyForm'

// 声明一个用于保存表单组件的 ref 属性
const form = ref(null);

// 读所有数据
function readAll() {
    // console.log(form.value)
    form.value.forEach(item => {
        item.read()
    })
}

// 重置所有数据
function resetAll() {
    form.value.forEach(item => {
        item.reset()
    })
}
</script>

<template>
    <div>
        <MyForm v-for="_ in 2" ref="form"></MyForm>
        <div>
            <button @click="readAll">读取所有表单</button>
            <button @click="resetAll">重置所有表单</button>
        </div>
    </div>
</template>

<style scoped>

</style>