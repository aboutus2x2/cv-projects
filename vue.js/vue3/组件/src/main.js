// ES 模块化
import {createApp, h} from 'vue'
import App from './App.vue'

// 声明一个用于全局注册的组件
const GlobalComponent = {
    render() {
        return h('div', null, [
            h('h2', null, '这是全局组件')
        ])
    }
}

createApp(App)
    // 全局注册组件
    .component('global-component', GlobalComponent)
    .mount('#app')
