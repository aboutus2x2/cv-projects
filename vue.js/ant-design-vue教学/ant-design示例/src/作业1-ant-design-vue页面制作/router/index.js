import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/SignIn')
        },
        {
            path: '/signUp',
            component: () => import('../views/SignUp')
        },
    ]
});

export default router