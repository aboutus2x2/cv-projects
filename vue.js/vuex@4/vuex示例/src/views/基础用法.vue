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
            this.$store.commit('mName', '李四')
        }
    }
}
</script>

<style scoped>

</style>