import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // component: () => import('@/views/基础用法')
            // component: () => import('@/views/getter')
            // component: () => import('@/views/mapState和mapActions')
            component: () => import('@/views/表单处理')
        }
    ]
});

export default router