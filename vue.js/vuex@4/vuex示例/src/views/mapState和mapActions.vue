<template>
    <div>
        <div>姓名: <input type="text" v-model="name">
            <button @click="aNa(name)">修改</button>
        </div>
        <ul>
            <li>name: {{ na }}</li>
            <li>sex: {{ sex }}</li>
            <li>age: {{ age }}</li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        // mapState 返回值是一个对象
        // key: 状态名
        // value: 获取状态值的函数
        const res = mapState(['name', 'sex', 'age'])
        console.log(res)
        console.log(res.name)
        // 调用mapState的函数时需要指定this的值
        console.log(res.name.call(this))
    },
    computed: {
        // 通过计算属性读取状态
        // name() {
        //     return this.$store.state.name
        // }


        // mapState使用方法
        // 1. 参数为数组，数组成员是状态的名称
        // ...mapState(['name', 'sex', 'age'])


        // 2. 参数是对象
        ...mapState({
            // key: 计算属性的名称
            // value: 一个获取状态的工厂函数
            na: (state, getters) => {
                // state: 当前状态
                // getters: 当前的getters属性
                return state.name
            },
            sex: state => state.sex,
            age: state => state.age
        })
    },
    methods: {
        // 通过方法更新状态
        // updateName() {
        //     this.$store.dispatch('aName', this._name)
        // }

        aName() {
            console.log('my aName')
        },


        // mapActions 用法
        // 1. 参数为数组，数组成员为 actions 的名称
        // ...mapActions(['aName', 'aSex', 'aAge'])

        // 2. 参数是对象
        // key: 方法名
        // value: action的名称
        ...mapActions({
            aNa: 'aName'
        }),
        ...mapActions(['aSex', 'aAge'])
    }
}
</script>

<style scoped>

</style>