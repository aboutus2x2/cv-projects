<script setup>
// 知识点：
// ref 将数据转换成响应式数据
//      解包: ref 通过 .value 来访问，此过程叫解包
//      自动解包: ref属性不需要通过 .value 来访问值，这种情况就是自动解包
//      若 ref 内的数据是对象类型 ref 内会自动通过 reactive 进行响应式转换
//      若 ref 中嵌套 ref 那么嵌套的 ref 将自动解包
//      shallowRef 不会自动解包的 ref
// reactive 将对象类型中所有属性深层次的转换成响应式属性
//      reactive 中嵌套的 ref 会自动解包
//      注意 reactive 数组成员若是一个 ref 对象，则访问它时不会自动解包
//      shallowReactive 不会自动解包的 reactive
// 只读属性
// toRefs


// 总结
// ref: 几乎所有的响应式属性都能通过 ref 来声明，对象和数组也可以用ref声明，那么对象内的属性和数组成员都是响应式的
// reactive: 数组或对象数据 需要其所有的 对象属性 或 数组成员都是 响应式的 则可以考虑使用 reactive

import {reactive, ref} from "vue";

// ref
// 使用 ref 可以创建一个深度响应式的属性

// 1. 声明一个响应式的值
const count = ref(0)

function changeCount() {
    count.value++
}

// 2. 声明对象/数组  那么对象和数组的成员都是响应式的
const obj = ref({name: '张三', sex: 'female'})
const arr = ref(['hello', 'world'])

function changeObj() {
    obj.value.name = '李四'
    obj.value.sex = 'male'
}

function changeArr() {
    arr.value[0] = '!!!'
    arr.value[1] = '==='
}

// 3. 嵌套 ref
// 嵌套在 ref 中的 ref 会自动解包
const ref1 = ref('this is ref1')
const ref2 = ref({message: ref1})

function changeRef2() {
    // 此处 message 需要解包吗？ref2.value.message.value?
    // 答: 不需要解包 直接调用即可
    ref2.value.message = 'this is changed'
}

// reactive
// 使用 reactive 可以创建一个深度响应式的对象或数组

// 1. 对象
const obj2 = reactive({money: 100, msg: '余额为100'})

function changeObj2() {
    // reactive 声明响应式对象
    // 在访问其属性时不需要解包
    obj2.money = 500
    obj2.msg = '天上掉钱了'
}

// 2. 数组
const arr2 = reactive(['张三', '李四'])

function changeArr2() {
    arr2[0] = '法外狂徒'
    arr2[1] = '追猎者'
}

// 3. 嵌套 ref
const ref3 = ref('this is ref3')
const ref4 = reactive({msg: ref3})

function changeRef4() {
    // 此处 msg 需要解包吗？ref3.msg.value?
    // 答: 不需要解包 直接调用即可
    ref4.msg = 'this is changed'
}

</script>

<template>
    <div>
        <h1>ref</h1>
        <h2>布尔 数字 字符串的 ref</h2>
        <div>count: {{ count }}
            <button @click="changeCount">修改</button>
        </div>
        <h2>对象或数组</h2>
        <div>
            <div>姓名: {{ obj.name }}; 性别: {{ obj.sex }}</div>
            <div>arr[0]: {{ arr[0] }}; arr[1]: {{ arr[1] }}</div>
            <button @click="changeObj">修改对象</button>
            <button @click="changeArr">修改数组</button>
        </div>
        <h2>嵌套 ref</h2>
        <div>
            <div>ref2.message: {{ ref2.message }}</div>
            <button @click="changeRef2">修改</button>
        </div>
        <h1>reactive</h1>
        <h2>对象</h2>
        <div>
            <div>money: {{ obj2.money }}; msg: {{ obj2.msg }}</div>
            <button @click="changeObj2">修改</button>
        </div>
        <h2>数组</h2>
        <div>
            <div>arr2[0]: {{ arr2[0] }}; arr2[1]: {{ arr2[1] }}</div>
            <button @click="changeArr2">修改</button>
        </div>
        <h2>嵌套 ref</h2>
        <div>
            <div>ref4.msg: {{ ref4.msg }}</div>
            <button @click="changeRef4">修改</button>
        </div>
    </div>
</template>

<style scoped>

</style>
