<!--<script setup>
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
        // 读取嵌套模块中的状态
        return store.state.shoppingCar.wallet.money
    },
    set(value) {
        // 修改嵌套模块中的状态
        store.dispatch('shoppingCar/wallet/aMoney', value)
    }
})

function callAGoodsItems() {
    // 调用命名空间模块内 注册到根节点的 action
    store.dispatch('aGoodsItems', ['彩电', '冰箱', '空调'])
}
</script>-->

<template>
    <div>
        <!--        <div>root name: {{ store.state.name }}</div>
                &lt;!&ndash; 读取模块中的状态 &ndash;&gt;
                <div>shoppingCar goodsItems: {{ store.state.shoppingCar.goodsItems }}</div>
                &lt;!&ndash; 读取模块中的 getters &ndash;&gt;
                &lt;!&ndash;        <div>topOne: {{ store.getters.topOne }}</div>&ndash;&gt;
                &lt;!&ndash; 读取命名空间内的 getters &ndash;&gt;
                <div>topOne: {{ store.getters['shoppingCar/topOne'] }}</div>
                <div>
                    <input type="text" v-model="item">
                    <button @click="addToShoppingCar">加入购物车</button>
                </div>-->
        <!-- 访问嵌套模块内的状态 -->
        <!--        <div>wallet money: {{ store.state.shoppingCar.wallet.money }}</div>-->
        <div>wallet money: {{ money }}</div>
        <div>
            <input type="number" v-model="m">
            <button @click="aMoney(m)">修改money</button>
        </div>
        <!--        <div>
                    <button @click="callAGoodsItems">调用根节点的 aGoodsItems</button>
                </div>-->
    </div>
</template>

<script>
import {createNamespacedHelpers, mapState, mapActions} from 'vuex'

// createNamespacedHelpers 可以创建带有命名空间的 mapState 和 mapActions
// 参数: 命名空间名
// const {mapState, mapActions} = createNamespacedHelpers('shoppingCar/wallet')

export default {
    data() {
        return {m: 100}
    },
    computed: {
        // ...mapState(['money']),
        // money: {
        //     get() {
        //         return this.$store.state.shoppingCar.wallet.money
        //     },
        //     set(value) {
        //         this.$store.dispatch('shoppingCar/wallet/aMoney', value)
        //     }
        // }

        // 第一个参数: 命名空间名
        ...mapState('shoppingCar/wallet', ['money'])
    },
    methods: {
        // ...mapActions(['aMoney'])

        // 第一个参数: 命名空间名
        ...mapActions('shoppingCar/wallet', ['aMoney'])
    }
}
</script>

<style scoped>

</style>