import {createRouter, createWebHashHistory} from "vue-router";
import Home from '../views/Home'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // redirect: '/home'
            // redirect: {name: 'h'}
            redirect: () => {
                return '/home'
            }
        },
        {
            path: '/home',
            component: Home,
            name: 'h',
            children: [
                {
                    path: 'page1',
                    component: () => import('../views/Page1')
                },
                {
                    path: 'page2',
                    component: () => import('../views/Page2'),
                    children: [
                        {
                            path: '',
                            components: {
                                v1: () => import('../views/P1'),
                                v2: () => import('../views/P2')
                            }
                        }
                    ]
                },
                {
                    path: 'page3/:id',
                    component: () => import('../views/Page3'),
                    // props: true,
                    // props: {id: 'hello_world'}
                    props: () => {
                        return {id: 'hello_666'}
                    },
                    children: [
                        {
                            path: '',
                            components: {
                                v1: () => import('../views/P2'),
                                v2: () => import('../views/P1')
                            }
                        }
                    ]
                }
            ]
        }
    ]
});

export default router