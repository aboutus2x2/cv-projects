<script setup>
// 知识点：
// 创建ref属性来获取页面元素
// 使用函数获取页面元素
// v-for中的ref
// 组件上的ref
//    子组件defineExpose

import {ref} from 'vue';
import RefChild from '@/components/RefChild'


// 创建ref属性来获取页面元素
// 声明一个ref属性 且名称和模板中的ref="inp"对应
// const inp = ref(null)

// 使用函数获取页面元素
const inp = ref(null)


// v-for 中的 ref
const lis = ref(null)


// 获取组件
const rc = ref(null)


function getLis() {
    console.log(lis.value)
}

function setInput() {
    // 获取输入框
    console.log(inp.value)
    inp.value.value = '新的输入框的值'
}

function readComponent() {
    console.log(rc.value)
    console.log(rc.value.name)
    console.log(rc.value.sex)
    rc.value.changeSex('other')
}

</script>

<template>
    <div>
        <!--        <input ref="inp" type="text"><br>-->
        <!-- 使用函数获取页面元素
            el: 当前元素或组件
         -->
        <input :ref="el=>{ inp = el }" type="text"><br>
        <button @click="setInput">设置input的值</button>
        <br>
        <RefChild ref="rc"></RefChild>
        <button @click="readComponent">读取组件内属性</button>
        <ul>
            <li ref="lis" v-for="(_, i) in 3">{{ i + 1 }}</li>
        </ul>
        <button @click="getLis">读取 lis</button>
    </div>
</template>

<style scoped>

</style>