import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/p1',
            component: () => import('../views/Page1')
        },
        {
            path: '/p2',
            component: () => import('../views/Page2')
        },
        {
            path: '/users',
            component: () => import('../views/Users')
        }
    ]
});

export default router