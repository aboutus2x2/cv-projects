<!--<script setup>
import {ref} from 'vue'
import {useStore} from "vuex";

// 获取store对象
const store = useStore();
</script>-->

<template>
    <div>
        <!-- 读取页面状态 -->
        <div>姓名: {{ $store.state.name }}</div>
        <button @click="updateName">修改姓名</button>
    </div>
</template>

<script>
export default {
    mounted() {
        // $store 代表 vuex 的 store 对象
        console.log(this.$store)
    },
    methods: {
        updateName() {
            // 不推荐使用 commit 直接在页面内修改状态，这是不规范的

            // 使用 commit 方法 调用 mutation 修改 state
            // 第一个参数: mutation 的名称
            // 第二个参数: 新的状态值
            // this.$store.commit('mName', '李四')

            // 推荐使用 action

            // 使用 dispatch 调用 action 来修改状态 state
            // 第一个参数: action 的名称
            // 第二个参数: 新的状态值
            // this.$store.dispatch('aName', '老王')

            // 若当前的action有返回值，则可以使用then获取返回值
            this.$store.dispatch('aName', '老王').then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>

</style>