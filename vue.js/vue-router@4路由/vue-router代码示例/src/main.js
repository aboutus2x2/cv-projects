import {createApp} from 'vue'
import App from './App.vue'
// import App from '@/作业-嵌套路由/App'

// 引入路由器对象
// import router from "@/router/index";
// import router from "@/router/基础用法";
// import router from '@/router/路由懒加载'
// import router from '@/router/动态路由匹配'
// import router from '@/router/嵌套路由'
// import router from '@/作业-嵌套路由/router/index'
// import router from '@/router/编程式导航'
// import router from '@/作业1-综合练习/router/index'
// import router from '@/router/命名视图'
// import router from '@/router/命名路由'
// import router from '@/router/重定向和别名'
// import router from '@/router/路由组件传参'
import router from '@/router/历史模式'

createApp(App)
    // 使用 use 安装路由器
    .use(router)
    .mount('#app')
