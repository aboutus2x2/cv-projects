import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        // component: () => import('@/views/第一个页面')
        // component: () => import('@/views/布局组件')
        // component: () => import('@/views/表单组件')
        // component: () => import('@/views/表单验证')
        component: () => import('@/views/分页表格')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
