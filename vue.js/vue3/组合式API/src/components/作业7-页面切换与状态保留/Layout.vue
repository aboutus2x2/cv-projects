<script setup>
import {ref} from 'vue'
</script>

<template>
    <div>
        <!-- 导航栏 -->
        <div class="navbar">
            <slot name="header"></slot>
        </div>
        <!-- 页面内容 -->
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    padding: 8px;
    border-bottom: 3px solid #000;
}

.content {
    padding: 8px;
}
</style>