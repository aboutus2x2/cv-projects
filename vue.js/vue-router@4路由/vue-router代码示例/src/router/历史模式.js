// 知识点
// 什么是历史模式
// 应用场景
// Hash模式
// Html5模式
// express 服务器配置历史模式
//      connect-history-api-fallback 中间件的使用


// 什么是历史模式
// 历史模式是 vue-router 用来记录 url 的方式，分为两种
// 1. Hash模式：特点是地址由 #/ 构成，hash模式和服务器没有关联
// 2. Html5模式：特点就是url看上去就是普通的请求地址，看着好看

// 应用场景
// 为了路径看上去好看，也为了SEO(search engine optimization)优化，所以使用 HTML5的历史模式

import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import Home from '@/views/Home'

const router = createRouter({
    // createWebHashHistory 创建哈希模式的历史
    // history: createWebHashHistory(),
    // createWebHistory 这是创建 HTML5 模式的历史
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/p1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/p2',
            component: () => import('@/views/Page2.vue')
        },
        {
            path: '/p3',
            component: () => import('@/views/Page3.vue')
        },
    ]
});

export default router;