<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";

// 引入store
const store = useStore();

const value = computed({
    get() {
        // 读取状态
        return store.state.value
    },
    set(value) {
        // 设置状态
        store.dispatch('aValue', value)
    }
})
</script>

<template>
    <div>
        <h1>Page1</h1>
        <!-- 双向绑定计算属性 -->
        <div><input type="text" v-model="value"></div>
        <router-link to="/p2"><button>to page2</button></router-link>
    </div>
</template>

<style scoped>

</style>