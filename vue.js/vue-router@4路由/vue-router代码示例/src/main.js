import {createApp} from 'vue'
import App from './App.vue'
// 引入路由器对象
// import router from "@/router/index";
// import router from "@/router/基础用法";
import router from '@/router/路由懒加载'

createApp(App)
    // 使用 use 安装路由器
    .use(router)
    .mount('#app')
