<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";

const store = useStore();

const item = ref('')

// 加入购物车
function addToShoppingCar() {
    // 修改模块中的状态
    // store.dispatch('addItem', item.value)
    // 具备命名空间后的写法
    store.dispatch('shoppingCar/addItem', item.value)
}

const money = computed({
    get() {
        return store.state.shoppingCar.wallet.money
    },
    set(value) {
        // 修改嵌套模块中的状态
        store.dispatch('shoppingCar/wallet/aMoney', value)
    }
})
</script>

<template>
    <div>
        <div>root name: {{ store.state.name }}</div>
        <!-- 读取模块中的状态 -->
        <div>shoppingCar goodsItems: {{ store.state.shoppingCar.goodsItems }}</div>
        <!-- 读取模块中的 getters -->
        <!--        <div>topOne: {{ store.getters.topOne }}</div>-->
        <!-- 读取命名空间内的 getters -->
        <div>topOne: {{ store.getters['shoppingCar/topOne'] }}</div>
        <div>
            <input type="text" v-model="item">
            <button @click="addToShoppingCar">加入购物车</button>
        </div>
        <!-- 访问嵌套模块内的状态 -->
        <div>wallet money: {{ store.state.shoppingCar.wallet.money }}</div>
        <div>
            <input type="number" v-model="money">
        </div>
    </div>
</template>

<style scoped>

</style>