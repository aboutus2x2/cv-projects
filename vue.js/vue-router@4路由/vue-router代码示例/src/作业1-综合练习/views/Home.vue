<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function toPage2() {
    router.push('/home/page2')
}
</script>

<template>
    <div>
        <h1>Home</h1>
        <router-link to="/home/page1">to page1</router-link>
        <button @click="toPage2">to page2</button>

        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>