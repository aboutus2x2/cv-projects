<script setup>
// 知识点：
// 声明事件
// 触发事件
// 自定义组件的 v-model


import EventsChild from '@/components/EventsChild'
import {computed, ref} from "vue";

const c = ref(0)
const m = ref('这是一条双向绑定的消息')
const first = ref('Bob')
const last = ref('Pop')
const fullName = computed(() => `${first.value} ${last.value}`)

function onPerFive(count) {
    c.value = count
}
</script>

<template>
    <div>
        <h1>接收来自于 EventsChild 的 count: {{ c }}</h1>
        <h1>MESSAGE: {{ m }}</h1>
        <h1>full name: {{ fullName }}</h1>
        <EventsChild v-model="m" v-model:firstName="first" v-model:lastName="last" @per-five="onPerFive"></EventsChild>
    </div>
</template>

<style scoped>

</style>