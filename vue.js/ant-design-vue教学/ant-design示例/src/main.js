import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import router from '@/作业1-ant-design-vue页面制作/router'
// import router from '@/作业2-ant-design-vue制作表格的crud/router'

import store from './store'
// import store from '@/作业1-ant-design-vue页面制作/store'
// import store from '@/作业2-ant-design-vue制作表格的crud/store'

// 引入样式
import 'ant-design-vue/dist/antd.min.css'
// 引入AntD插件
import AntD from 'ant-design-vue'
import dayjs from 'dayjs'
// 全局设置时间框架的语言
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

createApp(App)
    .use(store)
    .use(router)
    // 全局安装框架
    .use(AntD)
    .mount('#app')
