// 知识点：
// 什么是嵌套路由？
// 应用场景
// 如何声明嵌套路由
//      1. 路由配置 routes 中，给需要嵌套的路由配置添加 children 属性
//      2. 创建父组件，并在父组件中声明 <router-view>

// 什么是嵌套路由？
// 在一个路由视口中，又包含一个路由视口，这样形成的嵌套效果就是嵌套路由

// 应用场景
// 多用于页面布局时的局部页面切换，例如侧边栏按钮点击后，内容的切换

import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/views/嵌套路由'),
            // 添加 children 定义嵌套的页面
            children: [
                // children 中的配置和 routes 的配置相同
                {
                    // 嵌套路由常用相对路径进行定义
                    path: 'p1',
                    component: () => import('@/views/Page1')
                },
                {
                    path: 'p2',
                    component: () => import('@/views/Page2')
                }
            ]
        }
    ]
});

export default router;
