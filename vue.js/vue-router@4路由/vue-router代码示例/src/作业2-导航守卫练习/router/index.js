import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/signIn'
        },
        {
            path: '/signIn',
            component: () => import('../views/SignIn')
        },
        {
            path: '/signUp',
            component: () => import('../views/SignUp')
        },
        {
            path: '/home',
            component: () => import('../views/Home'),
            // beforeEnter(to, from, next) {
            //     if (localStorage['token']) next()
            //     else next('/signIn')
            // }
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.path === '/home') {
//         if (localStorage['token']) {
//             // 当前要跳转首页且拥有登录凭证
//             next()
//         } else {
//             // 没有凭证
//             alert('未登录')
//             next('/signIn')
//         }
//     } else {
//         next()
//     }
// })


// 白名单
// 不需要任何权限就可以直接进入的页面
// const whiteList = ['/signIn', '/signUp']
// router.beforeEach((to, from, next) => {
//     // 判断是否属于白名单
//     // ctrl + alt + t
//     if (whiteList.includes(to.path)) {
//         // 直接放行
//         next()
//         return
//     }
//
//     // 验证是否有访问权限
//     if (!localStorage['token']) {
//         alert('未登录')
//         // 没权限就跳转到登录页
//         next('/signIn')
//         return
//     }
//
//     next()
// })

export default router