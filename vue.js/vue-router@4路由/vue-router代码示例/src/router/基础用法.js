import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/views/Home'
import Page1 from '@/views/Page1'



// 知识点:
// 创建路由的步骤
//        1. 创建 router/index.js 配置
//        2. 在 main.js 中安装插件
//        3. 在页面中添加路由视口 <router-view>
// 使用 <router-link> 跳转 url



// 1. 创建 router(路由器) 对象
const router = createRouter({
    // 3. 添加配置
    // 有两个必要配置 history routes

    // 历史模式
    history: createWebHashHistory(),
    // 路由配置
    routes: [
        // 每个路由配置对应一个要显示的页面
        {
            // path 和 component 必填

            // 访问页面的路径
            path: '/home',
            // 对应路径的页面组件
            component: Home
        },
        {
            path: '/p1',
            component: Page1
        }
    ]
})

// 2. 导出 router
export default router