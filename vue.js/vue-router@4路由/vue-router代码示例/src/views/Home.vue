<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function go() {
    // 倒退两页
    router.go(-2)
}
</script>

<template>
    <div>
        <h1>Home</h1>
        <button @click="go">go -2</button>
    </div>
</template>

<style scoped>

</style>