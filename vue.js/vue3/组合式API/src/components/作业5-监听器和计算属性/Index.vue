<script setup>
import {computed, onMounted, ref, watch} from 'vue'

const cny = ref(0)

// 计算属性有缓存 所以使用计算属性
const lb = computed(() => cny.value * 10.93)
const jpy = computed(() => cny.value * 19.59)

// 股价
const gj = ref(10)
// 余额
const balance = ref(100)
// 股票数
const count = ref(0)

onMounted(() => {
    // 挂载完成后开始计时
    setInterval(() => {
        // gj.value
        let rand = -0.5 + Math.random()
        console.log(rand)
        gj.value += rand
    }, 200)
})

watch(gj, (newVal) => {
    if (newVal < 9 && balance.value > 0) {
        // 自动买入
        count.value = balance.value / newVal
        balance.value = 0
    } else if (newVal > 9.5 && count.value > 0) {
        // 自动卖出
        balance.value = count.value * newVal
        count.value = 0
    }
})
</script>

<template>
    <div>
        <div>请输入人名币的金额: <input type="number" v-model="cny"></div>
        <div>卢布: <input type="number" readonly :value="lb"></div>
        <div>日元: <input type="number" readonly :value="jpy"></div>
        <ul>
            <li>股价: {{ gj }}</li>
            <li>股民余额: {{ balance }}</li>
            <li>股份: {{ count }}</li>
            <li>市值: {{ count * gj }}</li>
        </ul>
    </div>
</template>

<style scoped>

</style>