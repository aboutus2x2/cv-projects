import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/第一个页面')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
