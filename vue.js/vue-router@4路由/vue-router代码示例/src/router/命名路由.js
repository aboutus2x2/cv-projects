// 知识点:
// 给路由配置添加 name 属性
// 使用路由名称实现路由跳转

import {createRouter, createWebHashHistory} from 'vue-router';
import NamedRoute from '@/views/命名路由'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: NamedRoute
        },
        {
            path: '/p3/:a',
            // 给路由取名字
            name: 'page3',
            component: () => import('@/views/Page3')
        }
    ]
});

export default router;
