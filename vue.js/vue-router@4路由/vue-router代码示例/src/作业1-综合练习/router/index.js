import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'page1',
                    component: () => import('../views/Page1')
                },
                {
                    path: 'page2',
                    component: () => import('../views/Page2')
                }
            ]
        }
    ]
});

export default router