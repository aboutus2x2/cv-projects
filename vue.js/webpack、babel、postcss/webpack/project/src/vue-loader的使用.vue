<script setup>
import {ref} from 'vue'

const count = ref(0)
</script>

<template>
    <div>
        <h1>欢迎使用 webpack</h1>
        <h1>count: {{ count }}</h1>
        <button @click="count++">+</button>
    </div>
</template>

<style scoped>

</style>