<script setup>
import {ref} from 'vue'

function clickHandler() {
    alert('ok')
}
</script>

<template>
    <div>
        <h1>hello vue</h1>
        <button @click="clickHandler">click me!</button>
    </div>
</template>

<style scoped>

</style>