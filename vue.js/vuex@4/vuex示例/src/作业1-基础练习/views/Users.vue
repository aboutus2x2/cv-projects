<script setup>
import {reactive, ref, toRefs} from 'vue'
import {useStore} from "vuex";

const store = useStore();

// 是否显示男性
const isShowMale = ref(false)

// 表单数据
const {name, sex, age} = toRefs(reactive({
    name: '',
    sex: 'other',
    age: 0
}))

// 添加用户
function add() {
    // 调用 action 添加一条数据
    store.dispatch('pushOne', {name: name.value, sex: sex.value, age: age.value})
}
</script>

<template>
    <div>
        <div>
            <button @click="isShowMale = true">显示所有男性</button>
        </div>
        <div>
            <h1>所有数据</h1>
            <table border>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, i) in store.state.tableData" :key="i">
                    <td>{{ user.name }}</td>
                    <td>{{ user.sex }}</td>
                    <td>{{ user.age }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-if="isShowMale">
            <h1>所有男性</h1>
            <table border>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, i) in store.getters.allMale" :key="i">
                    <td>{{ user.name }}</td>
                    <td>{{ user.sex }}</td>
                    <td>{{ user.age }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h1>添加用户</h1>
            <div><label>姓名: <input type="text" v-model.trim="name"></label></div>
            <div>性别:
                <label><input v-model="sex" type="radio" value="male"> 男</label>
                <label><input v-model="sex" type="radio" value="female"> 女</label>
                <label><input v-model="sex" type="radio" value="other"> 其他</label>
            </div>
            <div><label>年龄: <input type="number" v-model.number="age"></label></div>
            <button @click="add">添加</button>
        </div>
    </div>
</template>

<style scoped>

</style>