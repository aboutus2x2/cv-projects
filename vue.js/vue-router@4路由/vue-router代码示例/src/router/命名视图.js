// 知识点：
// 什么是命名视图
// 应用场景
// 使用方法
//      1. 给路由视口添加 name 属性，没有 name 属性的将被当作 default 使用
//      2. 在路由配置中添加 components 属性，为不同的路由视口添加对应的组件


// 什么是命名视图
// 当一个页面中存在多个路由视口时，需要通过name属性进行区分，这样的视图就叫命名视图


// 应用场景
// 当一个页面足够复杂 由多个路由视口组成，则需要使用命名视图来进行区分

import {createRouter, createWebHashHistory} from 'vue-router';
import NamedView from '@/views/命名视图'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: NamedView,
            children: [
                {
                    path: 'page1',
                    // 若使用 component 属性规定页面，则只有匿名的 router-view 会显示该页面
                    // component: () => import('@/views/Page1')

                    // 使用 components 用于规定命名视图显示的页面
                    components: {
                        // key: 命名视图的名称
                        // value: 对应显示的页面
                        two: () => import('@/views/命名视图子页面/P2'),
                        three: () => import('@/views/命名视图子页面/P3'),

                        // default: 匿名路由视口
                        default: () => import('@/views/命名视图子页面/P1')
                    }
                },
                {
                    path: 'case2',
                    components: {
                        default: () => import('@/views/命名视图子页面/C1'),
                        two: () => import('@/views/命名视图子页面/C2'),
                        three: () => import('@/views/命名视图子页面/C3'),
                    }
                }
            ]
        },
    ]
});

export default router;
