import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import router from '@/作业1-ant-design-vue页面制作/router'

import store from './store'
// import store from '@/作业1-ant-design-vue页面制作/store'

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
