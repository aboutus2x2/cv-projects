<script setup>
import {computed, ref} from 'vue'

// box1 的高度
const box1Height = ref(200)

// box2 的高度 使用计算属性进行计算
const box2Height = computed({
    get() {
        return window.innerHeight - box1Height.value
    },
    set(value) {
        // 计算新的box1的高度
        box1Height.value = window.innerHeight - value
    }
})

// 输入框的值
const value = ref(box2Height.value)

function modify() {
    // 修改box2高度
    box2Height.value = value.value
}
</script>

<template>
    <div>
        <div class="box1" :style="`height: ${box1Height}px`">box1</div>
        <div class="box2" :style="`height: ${box2Height}px`">
            <div>
                <input type="number" v-model.number="value">
                <button @click="modify">修改</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box1 {
    background-color: #f00;
}

.box2 {
    background-color: #0f0;
}
</style>