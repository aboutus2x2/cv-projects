import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入 store
// import store from '@/store/基础用法'
import store from '@/store/getter'

createApp(App)
    .use(router)
    // 安装 store 插件
    .use(store)
    .mount('#app')
