<script setup>
import {computed, inject, ref} from 'vue'

const btns = ref([
    {title: '文章1', content: '这是文章1的内容', active: true},
    {title: '文章2', content: '这是文章2的内容', active: false},
    {title: '文章3', content: '这是文章3的内容', active: false},
])

// 计算出当前正被激活的文章
const content = computed(() => {
    // 查找按钮
    const btn = btns.value.find(btn => btn.active)
    return btn.content
})

// 按钮点击切换文章
// index: 将要切换的文章索引
function switchBtn(index) {
    // 若点击的按钮已被激活
    if (btns.value[index].active) return
    // 清除状态
    btns.value.forEach(btn => {
        btn.active = false
    })
    // 打开对应按钮的激活开关
    btns.value[index].active = true
}


// 注入参数
const theme = inject('theme', 'light')
</script>

<template>
    <div :class="`root ${theme}`">
        <h1>页面1</h1>
        <div class="container">
            <div class="left">
                <div v-for="(btn,i) in btns" :class="`btn ${btn.active? 'active': ''}`" @click="switchBtn(i)">{{
                        btn.title
                    }}
                </div>
            </div>
            <div class="right">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.root.light {
    color: #000;
    background-color: #fff;
}

.root.dark {
    color: #fff;
    background-color: #000;
}

.container {
    display: flex;
    border: 3px solid #000;
}

.left {
    border-right: 3px solid #000;
}

.btn {
    padding: 16px;
    border-bottom: 3px solid #000;
}

.btn:last-child {
    border: none;
}

.btn.active {
    background-color: #00aaff;
    color: #fff;
}

.right {
    flex-grow: 1;
    padding: 16px;
}
</style>