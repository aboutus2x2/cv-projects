import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/views/Home'
import Page1 from '@/views/Page1'

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