<script setup>
import {ref} from 'vue'

defineProps(['name', 'sex'])
</script>

<template>
    <div>
        <h1>路由组件传参</h1>
        <div>name: {{name}}; sex: {{sex}}</div>

        <router-view name="p1"></router-view>
        <router-view name="p2"></router-view>
    </div>
</template>

<style scoped>

</style>