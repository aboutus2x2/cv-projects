// 知识点:
// 什么是路由懒加载？
// 应用场景
// 懒加载方法

// 什么是路由懒加载？
// 当页面未被使用的时候就不加载，使用页面的时候才加载
// 应用场景
// 多用在多个页面切换时，节约计算机性能开销和网络流量

import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/views/Home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/p1',
            // 使用工厂函数 返回 import 函数的返回值
            component: () => import('@/views/Page1')
        }
    ]
});

export default router
