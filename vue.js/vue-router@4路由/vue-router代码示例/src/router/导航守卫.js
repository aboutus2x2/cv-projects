// 知识点
// 什么是导航守卫
// 应用场景
// 全局守卫
//      beforeEach
//          返回false不跳转
//          返回true或undefined代表放行
//          可选参数 next
//      beforeResolve
//          和 beforeEach 参数相同
//      afterEach
//          不需要返回值
//          没有 next 参数
// 路由独享守卫
//      beforeEnter
//      beforeEnter 责任链数组
// 组件内守卫  // 组件内守卫请参考 Page3.vue
//      组合式API内使用
//          onBeforeRouteLeave
//          onBeforeRouteUpdate
//      选项式API内使用
//          beforeRouteEnter
//              此处不能使用 this 访问当前组件
//          beforeRouteUpdate
//          beforeRouteLeave


// 什么是导航守卫
// 导航守卫就是每次路由跳转时都将执行的钩子函数

// 应用场景
// 验证页面权限，没有权限将跳转默认页面（例如：登录验证，没有登录的将被踢回登录页）


import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: () => import('@/views/Page1.vue')
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('@/views/Page2.vue'),
        },
        {
            path: '/page3',
            component: () => import('@/views/Page3.vue')
        },
    ]
});

// 全局守卫
// 全局导航守卫，在任意的页面跳转时，都会拦截这次跳转

// beforeEach
// 进入下一个页面前被调用
// 所有的导航守卫调用后都有一个返回值，该返回值是一个用于取消守卫的函数
// router.beforeEach((to, from) => {
//     // to: 到哪里
//     // from: 从哪里来
//     // to from 都是路由对象
//     console.log('to====================')
//     console.log(to)
//     console.log('from====================')
//     console.log(from)
//
//
//     // 返回一个 bool 值
//     if (to.path === '/page2') {
//         // 返回false代表拒绝访问
//         return false
//     } else {
//         // 返回 true 或 undefined 代表放行
//         return true
//     }
// })

// 返回值 cancel 是一个取消守卫的函数
const cancel = router.beforeEach((to, from, next) => {
    console.log('before each')
    // next: 放行函数，若参数中包含next，则必须调用它
    if (to.path === '/page2') {
        // 1. 参数为 false 代表拒绝访问
        // next(false)
        // 2. 参数是路由跳转的对应参数，则跳转页面
        // next('/page1')
        next({name: 'page1'})
        cancel()
    } else {
        // 3. 不加参数代表放行
        next()
    }
})


// beforeResolve 会在页面进入前，且组件的守卫函数调用完之后被触发
router.beforeResolve((to, from) => {
    // 参数和 beforeEach 相同
    // console.log('before resolve')
})


// afterEach 进入页面后触发
router.afterEach((to, from) => {
    // 和 beforeEach 不同之处在于 不需要返回值 也没有 next 参数
    // console.log('after each')
})


export default router;