<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";

const store = useStore();

const item = ref('')

// 加入购物车
function addToShoppingCar() {
    // 修改模块中的状态
    store.dispatch('addItem', item.value)
}
</script>

<template>
    <div>
        <div>root name: {{ store.state.name }}</div>
        <!-- 读取模块中的状态 -->
        <div>shoppingCar goodsItems: {{ store.state.shoppingCar.goodsItems }}</div>
        <!-- 读取模块中的 getters -->
        <div>topOne: {{ store.getters.topOne }}</div>
        <div>
            <input type="text" v-model="item">
            <button @click="addToShoppingCar">加入购物车</button>
        </div>
    </div>
</template>

<style scoped>

</style>