<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";

const store = useStore();

// 声明类计算属性
const name = computed({
    get() {
        // 读取状态
        return store.state.name
    },
    set(value) {
        // 修改状态
        store.dispatch('aName', value)
    }
})
const sex = computed({
    get() {
        return store.state.sex
    },
    set(value) {
        store.dispatch('aSex', value)
    }
})
const age = computed({
    get() {
        return store.state.age
    },
    set(value) {
        store.dispatch('aAge', value)
    }
})
</script>

<template>
    <div>
        <div><label>姓名: <input type="text" v-model="name"></label></div>
        <div>性别:
            <label><input v-model="sex" type="radio" value="male"> 男</label>
            <label><input v-model="sex" type="radio" value="female"> 女</label>
            <label><input v-model="sex" type="radio" value="other"> 其他</label>
        </div>
        <div><label>年龄: <input type="number" v-model.number="age"></label></div>
        <div>
            <button>提交</button>
        </div>
    </div>
</template>

<style scoped>

</style>