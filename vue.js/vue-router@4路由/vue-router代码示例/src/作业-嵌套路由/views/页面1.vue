<script setup>
import {ref} from 'vue'
import {useRoute} from "vue-router";

// 读取当前路由对象
const route = useRoute()
console.log(route)

// 声明一个用于匹配路由地址的正则
const regex = /(?<=\/p1\/)[\s\S]*$/
const r = route.path.match(regex)
console.log(r)

// 声明router-link的循环配置
const btns = ref([
    {title: '文章1', url: 'w1', active: false},
    {title: '文章2', url: 'w2', active: false},
    {title: '文章3', url: 'w3', active: false},
])

// 根据正则表达式匹配的路由结果 激活对应url的active
if (r) {
    btns.value.every(btn => {
        // 判断 url 是否和正则匹配的结果相同
        if (btn.url === r[0]) {
            // 激活按钮
            btn.active = true
            return false
        }
        return true
    })
}

// 切换按钮的样式
function switchBtn(url) {
    // 找到需要切换的索引
    const i = btns.value.findIndex(btn => btn.url === url)

    // 若已经被激活就直接返回
    if (btns.value[i].active) return

    // 重置所有
    btns.value.forEach(btn => {
        btn.active = false
    })
    btns.value[i].active = true
}
</script>

<template>
    <div>
        <h1>页面1</h1>
        <div class="container">
            <div class="left">
                <router-link v-for="btn in btns" :key="btn.url" :to="`/p1/${btn.url}`">
                    <div @click="switchBtn(btn.url)" :class="`button ${btn.active? 'active': ''}`">{{ btn.title }}</div>
                </router-link>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    border: 3px solid #000;
}

.left {
    width: 150px;
    border-right: 3px solid #000;
}

.right {
    flex-grow: 1;
    padding: 16px;
}

.button {
    border-bottom: 3px solid #000;
    padding: 16px;
    text-align: center;
}

.button.active {
    background-color: #00aeff;
    color: #fff;
}

a {
    text-decoration: none;
}

a:last-child > div {
    border: none;
}
</style>