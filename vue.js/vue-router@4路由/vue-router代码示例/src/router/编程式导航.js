// 知识点：https://router.vuejs.org/zh/guide/essentials/navigation.html
// 什么式编程式导航？
// 应用场景
// push 入栈导航
// replace 替换路由(重定向)
// go 跳转指定数量的页面 参数写 1 代表前进一个页面 -1 代表后退一个页面
// back 返回
// forward 前进
// 组合式API 先使用 useRouter() 获取路由器对象
// 选项式API中使用 this.$router 代表路由器对象


// 什么式编程式导航？
// 使用 js 代码方式来控制页面导航
// router-link 导航这个叫做声明式导航

// 应用场景
// 所有需要用 js 代码控制导航的地方

import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/p1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/p2',
            component: () => import('@/views/Page2.vue')
        },
        {
            path: '/home',
            component: () => import('@/views/Home.vue')
        },
    ]
});

export default router;