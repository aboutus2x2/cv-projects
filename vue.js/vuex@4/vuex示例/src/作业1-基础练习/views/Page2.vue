<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";

const store = useStore();
</script>

<template>
    <div>
        <h1>Page2</h1>
        <div>value: {{ store.state.value }}</div>
    </div>
</template>

<style scoped>

</style>