<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function addRoute() {
    // 添加路由
    // 第一个参数(选填)：父路由的名称; 不填该参数就是添加一个顶级路由
    // 第二个参数：路由配置，只能接收一个配置，不能接收数组
    router.addRoute('dr', {
        path: 'p1',
        component: () => import('@/views/Page1')
    })

    router.addRoute({
        path: '/home',
        name: 'h',
        component: () => import('@/views/Home')
    })
}

function removeRoute() {
    // 删除路由
    // 参数：路由的名称
    router.removeRoute('h')
}

function getRoutes() {
    // 读取所有路由
    console.log(router.getRoutes())
}

function hasRoute() {
    // hasRoute 判断是否存在指定名称的路由
    console.log(router.hasRoute('dr'))
    console.log(router.hasRoute('h'))
}
</script>

<template>
    <div>
        <h1>动态路由</h1>
        <button @click="addRoute">添加路由</button>
        <button @click="removeRoute">删除路由</button>
        <button @click="getRoutes">获取路由</button>
        <button @click="hasRoute">是否存在某个路由</button>

        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>