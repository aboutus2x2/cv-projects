<template>
    <div>
        <div>姓名: {{ name }}</div>
        <div>性别: {{ sex }}</div>
        <div>年龄: {{ age }}</div>
        <Child :name="name" :sex="sex" :age="age" @nameInput="onNameInput" @sexChange="onSexChange"
               @ageInput="onAgeInput"></Child>
    </div>
</template>

<script>
import Child from "@/components/作业-组件综合练习/Child";

export default {
    name: "Index",
    components: {
        Child
    },
    data() {
        return {
            name: '老王',
            sex: 'other',
            age: 30
        }
    },
    methods: {
        onNameInput(newName) {
            // newName: 修改后的name值
            this.name = newName
        },
        onSexChange(newSex) {
            this.sex = newSex
        },
        onAgeInput(newAge) {
            this.age = newAge
        }
    }
}
</script>

<style scoped>

</style>