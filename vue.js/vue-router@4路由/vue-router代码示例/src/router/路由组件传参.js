// 知识点
// 什么是路由组件传参
// 应用场景
// 布尔模式
// 对象模式
// 函数模式
// 命名视图
// meta 元数据


// 什么是路由组件传参
// 动态路由匹配的参数可以直接赋值给组件的 props，来达到传参的目的

// 应用场景
// 需要在组件中方便的传递路由参数

import {createRouter, createWebHashHistory} from 'vue-router';
import RouteParams from '@/views/路由组件传参'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            // path: '/name/:name/sex/:sex',
            path: '/home',
            meta: {title: 'this is title'},
            component: RouteParams,
            // 1. 布尔模式
            // 路径参数 :name :sex 会自动注入组件的 props 中
            // props: true
            // 2. 对象模式
            // key: 组件的props名称
            // value: props 的值
            // 对象写法的值是静态的
            // props: {name: '李四', sex: 'female'},
            // 3. 工厂函数
            // props: (route) => {
            //     // route: 当前路由对象
            //     console.log(route)
            //     // 工厂函数需要返回一个有效的对象
            //     return {
            //         name: '老王',
            //         sex: 'other'
            //     }
            // }

            children: [
                {
                    path: 'name/:name/sex/:sex',
                    components: {
                        p1: () => import('@/views/命名视图子页面/P1'),
                        p2: () => import('@/views/命名视图子页面/P2')
                    },
                    // 给命名视图分别定义 props 传参
                    // 给对应视图名声明合法的 props 的模式
                    // 可以是: 布尔模式，对象模式，工厂函数
                    // props: {p1: true, p2: {name: '李四', sex: 'female'}}
                    props: {
                        p1: true, p2: () => {
                            return {
                                name: '李四',
                                sex: 'male'
                            }
                        }
                    }
                }
            ]
        }
    ]
});

export default router;