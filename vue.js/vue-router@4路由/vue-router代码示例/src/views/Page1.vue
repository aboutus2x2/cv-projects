<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

// 引入路由器
// 所有的编程式导航都要使用路由器对象
// 路由器进行导航时返回的是 promise 对象
const router = useRouter()

function toP2() {
    // 入栈导航
    router.push('/p2').then(() => {
        console.log('导航完成')
    })
}
</script>

<template>
    <div>
        <h1>Page1</h1>
        <button @click="toP2">to page2</button>
    </div>
</template>

<style scoped>

</style>