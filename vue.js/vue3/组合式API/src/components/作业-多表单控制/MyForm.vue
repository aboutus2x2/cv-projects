<script setup>
import {reactive, ref} from 'vue'

const state = reactive({
    name: '',
    sex: 'other',
    age: 0
});

// 读数据
function read() {
    console.log(state)
}

// 重置
function reset() {
    state.name = ''
    state.sex = 'other'
    state.age = 0
}

defineExpose({read, reset})
</script>

<template>
    <div>
        <div>姓名: <input type="text" v-model="state.name"></div>
        <div>性别:
            <label><input v-model="state.sex" type="radio" value="male"> 男</label>
            <label><input v-model="state.sex" type="radio" value="female"> 女</label>
            <label><input v-model="state.sex" type="radio" value="other"> 其他</label>
        </div>
        <div>年龄: <input type="number" v-model="state.age"></div>
        <div>
            <button @click="reset">重置</button>
            <button @click="read">读取数据</button>
        </div>
    </div>
</template>

<style scoped>

</style>