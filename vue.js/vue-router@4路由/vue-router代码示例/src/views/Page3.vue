<!--<script setup>
import {ref} from 'vue'
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";


onBeforeRouteLeave((to, from, next) => {
    console.log('离开页面时触发')
    next()
})

onBeforeRouteUpdate((to, from, next) => {
    console.log('路由更新前触发')
    console.log('当路径参数变化时就会触发该函数')
    next()
})
</script>-->

<template>
    <div>
        <h1>Page3</h1>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log('进入页面前')
        console.log('进入页面前组件其实还没有产生，所以无法使用 this 来代表组件自身')
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('路由更新前触发')
        console.log('当路径参数变化时就会触发该函数')
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('离开页面时触发')
        next()
    }
}
</script>

<style scoped>

</style>