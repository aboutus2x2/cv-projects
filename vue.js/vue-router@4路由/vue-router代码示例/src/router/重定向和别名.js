// 知识点：
// 什么是重定向和别名
// 应用场景
// 配置重定向
//      1. 字符串
//      2. 对象
//      3. 工厂函数
// 配置别名


// 什么是重定向？
// 访问一个 url 地址时，被重新要求访问了另一个地址，这个过程是重定向
// 什么是别名？
// 别名是路由的另一个名称

// 应用场景
// 重定向多用于一些地址定向到首页
// 别名多用于简化路径

import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/views/Home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
        //     path: '/',
        //     meta: {title: 'test title'},
        //
        //     // 重定向
        //
        //     // 1. 字符串
        //     // redirect: '/home'
        //     // 2. 对象（对应要使用命名路由）
        //     // redirect: {name: 'h', params: {id: 123}}
        //     // 3. 工厂函数
        //     redirect: (to) => {
        //         // to: 当前路由对象
        //         console.log(to)
        //         // 返回一个合法的重定向用的对象或字符串
        //         // return '/home/666'
        //         return {name: 'h', params: {id: '2233'}}
        //     }
        // },
        // {
        //     path: '/home/:id',
        //     name: 'h',
        //     component: Home
        // },
        {
            path: '/abc/xyz/123/7788/0022/home',
            // 别名
            // 别名相当于原路径的快捷方式
            alias: '/home',
            component: Home
        }
    ]
});

export default router