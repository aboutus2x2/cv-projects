<script setup>
import {ref} from 'vue'

defineProps(['name', 'sex'])
</script>

<template>
    <div>
        <h1>P1</h1>
        <div>name: {{ name }}; sex: {{ sex }}</div>
    </div>
</template>

<style scoped>

</style>