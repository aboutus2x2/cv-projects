import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/基础用法')
        }
    ]
});

export default router