<script setup>
import {ref} from 'vue'
</script>

<template>
    <div>
        <div>============1============</div>
        <router-view></router-view>
        <div>============2============</div>
        <router-view name="two"></router-view>
        <div>============3============</div>
        <router-view name="three"></router-view>
        <div>============4============</div>
    </div>
</template>

<style scoped>

</style>