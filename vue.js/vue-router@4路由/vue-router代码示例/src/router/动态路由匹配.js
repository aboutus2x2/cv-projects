// 知识点：
// 什么是动态路由匹配
// 应用场景
// 使用方法
// this.$route


// 什么是动态路由匹配？
// 通过不同的 url 路径可以跳转到同一个页面，这种 path 的设置方法就是动态路由匹配

// 应用场景
// 同一个页面可以通过不同的 url 来获取参数，从而显示不同的内容，例如：b站的用户中心，直播间，京东的商品详情页等

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // :id 就是参数
            // 路径上 冒号开头的内容都是参数
            path: '/video/:id/user/:userId',
            component: () => import('@/views/动态路由匹配'),
            // 元数据
            meta: {userData: '我自己添加的路由数据'}
        }
    ]
});

export default router