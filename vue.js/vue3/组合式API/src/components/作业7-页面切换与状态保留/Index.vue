<script setup>
import Layout from './Layout'
import {ref, defineAsyncComponent, shallowRef, provide} from 'vue'
import Page1 from './Page1'

const Page2 = defineAsyncComponent(() => import('./Page2'))
const Page3 = defineAsyncComponent(() => import('./Page3'))

// 当前页面
const page = shallowRef(Page1)

// 按钮配置
const btns = shallowRef([
    {title: '页面1', component: Page1},
    {title: '页面2', component: Page2},
    {title: '页面3', component: Page3},
])

// 切换页面
// component: 要切换的页面组件
function switchPage(component) {
    page.value = component
}

const theme = ref('light')

// 依赖注入的供应商
provide('theme', theme)
</script>

<template>
    <div>
        <Layout>
            <template #header>
                <div class="nav-container">
                    <div class="btns">
                        <div v-for="btn in btns" class="btn" @click="switchPage(btn.component)">{{ btn.title }}</div>
                    </div>
                    <div>
                        <select v-model="theme">
                            <option value="light">亮色主题</option>
                            <option value="dark">暗色主题</option>
                        </select>
                    </div>
                </div>
            </template>

            <template #content>
                <component :is="page"></component>
            </template>
        </Layout>
    </div>
</template>

<style scoped>
.btns {
    display: flex;
}

.btn {
    margin-right: 8px;
}

.nav-container {
    display: flex;
    justify-content: space-between;
}
</style>