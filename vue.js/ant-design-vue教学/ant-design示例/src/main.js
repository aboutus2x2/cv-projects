import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式
import 'ant-design-vue/dist/antd.min.css'
// 引入AntD插件
import AntD from 'ant-design-vue'

createApp(App)
    .use(store)
    .use(router)
    // 全局安装框架
    .use(AntD)
    .mount('#app')
