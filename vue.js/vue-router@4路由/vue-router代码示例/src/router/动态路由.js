// 知识点
// 什么是动态路由
// 应用场景
// addRoute
// removeRoute
// getRoutes
// hasRoute


// 什么是动态路由
// 可以在程序运行过程中增减路由配置，而不是写死的路由

// 应用场景
// 通常会根据一个用户的权限，动态创建该用户可以访问的页面路由

import {createRouter, createWebHashHistory} from 'vue-router';
import DynamicRoute from '@/views/动态路由.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'dr',
            component: DynamicRoute,
            children: [
            ]
        }
    ]
});

export default router;
