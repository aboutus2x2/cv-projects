<script setup>
import {ref} from 'vue'
import {useRoute} from "vue-router";


// 获取当前路由对象
const route = useRoute()

const {id, userId} = route.params

console.log(route)
// route 下有如下属性
// *route.fullPath: 完整路由路径
// route.matched: 路由地址匹配成功的路由配置对象
// *route.meta: 元数据
// *route.name: 路由名称
// *route.params: 路径参数
// *route.path: 路由路径
// *route.query: 路由的查询字符串参数
// route.redirectedFrom: 重定向源
</script>

<template>
    <div>
        <h1>参数值: id: {{ id }}; userId: {{ userId }}</h1>
    </div>
</template>

<style scoped>

</style>