<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function back() {
    router.back()
    // router.go(-1)
}
</script>

<template>
    <div>
        <h1>Page1</h1>
        <button @click="back">返回</button>
    </div>
</template>

<style scoped>

</style>