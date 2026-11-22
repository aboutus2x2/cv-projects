<template>
    <div>
        <div>姓名: <input type="text" :value="name" @input="nameInput"></div>
        <div>性别: <input type="text" :value="sex" @input="sexInput"></div>
        <div>年龄: <input type="number" :value="age" @input="ageInput"></div>
    </div>
</template>

<script>
export default {
    name: "Child",
    emits: ['nameInput', 'sexChange', 'ageInput'],
    props: {
        name: String,
        sex: {
            type: String,
            default() {
                return 'other'
            }
        },
        age: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    methods: {
        nameInput(ev) {
            // 当姓名变化后，发出一个事件通知父组件修改姓名
            this.$emit('nameInput', ev.target.value)
        },
        sexInput(ev) {
            this.$emit('sexChange', ev.target.value)
        },
        ageInput(ev) {
            this.$emit('ageInput', Number(ev.target.value))
        }
    }
}
</script>

<style scoped>

</style>