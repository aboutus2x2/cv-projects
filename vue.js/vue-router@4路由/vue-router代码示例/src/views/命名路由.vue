<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function toPage3() {
    // 编程式导航参数和声明式导航相同
    router.push({name: 'page3', params: {a: 1}})
}
</script>

<template>
    <div>
        <h1>命名路由</h1>
        <!-- 声明式导航 to 中 填入一个对象
         name: 路由名称
         params: 路径参数
         -->
        <router-link :to="{name: 'page3', params: {a: 1}}">to page3</router-link>
        <button @click="toPage3">to Page3</button>
    </div>
</template>

<style scoped>

</style>