<script setup>
// 知识点：
// 声明计算属性
// 计算属性的get和set

import {computed, ref} from 'vue';

// 人名币
const cny = ref(0);

// 津巴布韦币
// 参数是一个返回计算结果的函数
// const jbbw = computed(() => cny.value / 0.02142)


// 给计算属性添加 get / set
const jbbw = computed({
    get() {
        return Number((cny.value / 0.02142).toFixed(2))
    },
    set(value) {
        cny.value = Number((value * 0.02142).toFixed(2))
    }
})

</script>

<template>
    <div>
        cny: <input type="number" v-model.number="cny"><br/>
        <!--        jbbw: <input type="number" :value="jbbw">-->
        jbbw: <input type="number" v-model.number="jbbw">
    </div>
</template>

<style scoped>

</style>