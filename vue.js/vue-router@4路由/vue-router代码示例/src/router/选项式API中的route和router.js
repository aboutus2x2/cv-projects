import {createRouter, createWebHashHistory} from "vue-router";
import OptionsAPI from '@/views/选项式API中route和router的用法'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: OptionsAPI
        }
    ]
});

export default router