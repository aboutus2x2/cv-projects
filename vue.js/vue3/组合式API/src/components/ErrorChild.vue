<script setup>
import {reactive, ref, toRefs} from 'vue'

const state = reactive({
    num1: 0,
    num2: 0,
    result: '0',
})

const {num1, num2, result} = toRefs(state)

function compute() {
    if (num2.value === 0) throw new Error('除数不能为0')
    result.value = (num1.value / num2.value).toFixed(2)
}
</script>

<template>
    <div>
        <input type="text" v-model="num1"> / <input type="text" v-model="num2"> = {{ result }}
        <div>
            <button @click="compute">计算</button>
        </div>
    </div>
</template>

<style scoped>

</style>