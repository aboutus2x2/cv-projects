<script setup>
import {ref} from 'vue'

defineProps(['id'])
</script>

<template>
    <div>
        <h1>Page3</h1>
        <div>id: {{ id }}</div>
        <router-view name="v1"></router-view>
        <router-view name="v2"></router-view>
    </div>
</template>

<style scoped>

</style>