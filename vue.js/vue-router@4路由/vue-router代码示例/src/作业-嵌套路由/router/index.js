import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/p1',
            component: () => import('../views/页面1'),
            children: [
                {
                    path: 'w1',
                    component: () => import('../views/文章1')
                },
                {
                    path: 'w2',
                    component: () => import('../views/文章2')
                },
                {
                    path: 'w3',
                    component: () => import('../views/文章3')
                },
            ]
        },
        {
            path: '/p2',
            component: () => import('../views/页面2')
        },
        {
            path: '/p3',
            component: () => import('../views/页面3')
        },
    ]
});

export default router