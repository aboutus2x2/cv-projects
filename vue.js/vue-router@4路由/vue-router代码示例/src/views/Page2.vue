<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function replaceHome() {
    // 替换
    router.replace('/home')
}

function back() {
    // 返回
    // 等价于 router.go(-1)
    router.back()
}

function forward() {
    // 前进
    // 等价于 router.go(1)
    router.forward()
}
</script>

<template>
    <div>
        <h1>Page2</h1>
        <button @click="replaceHome">replace home</button>
        <button @click="back">返回</button>
        <button @click="forward">前进</button>
    </div>
</template>

<style scoped>

</style>