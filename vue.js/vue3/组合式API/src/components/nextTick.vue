<script setup>
import {nextTick, ref} from 'vue'

// 什么是nextTick?
// nextTick代表下次渲染完成后的回调

const box = ref(null)
const width = ref(100)

function changeWidth() {
    // 修改响应式属性本质上是异步的
    // 所以此处修改宽度为 500
    // 当立即取出元素宽度时，其实元素宽度尚未改变
    width.value = 500
    // console.log(getComputedStyle(box.value).width)

    nextTick(() => {
        // 通过使用 nextTick 能够获取到修改后的正确值
        console.log(getComputedStyle(box.value).width)
    })
}
</script>

<template>
    <div>
        <div ref="box" class="box" :style="`width: ${width}px`"></div>
        <button @click="changeWidth">修改宽度</button>
    </div>
</template>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #f00;
}
</style>