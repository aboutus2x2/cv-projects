<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";

const store = useStore();
</script>

<template>
    <div>
        <!-- getters 被当作属性使用而不是函数 -->
        <h1>日期: {{ store.getters.now }}</h1>
    </div>
</template>

<style scoped>

</style>