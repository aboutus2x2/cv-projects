<script setup>
import {ref} from 'vue'
</script>

<template>
    <div>
        <!-- 导航栏 -->
        <div class="navbar">
            <router-link to="/p1">
                <div class="btn">页面1</div>
            </router-link>
            <router-link to="/p2">
                <div class="btn">页面2</div>
            </router-link>
            <router-link to="/p3">
                <div class="btn">页面3</div>
            </router-link>
        </div>
        <!-- 内容 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
}

.navbar {
    border-bottom: 3px solid #000;
}

.btn {
    display: inline-block;
    padding: 16px;
}

.content {
    padding: 0 16px;
}
</style>