import _ from '@/assets/lodash'
import App from '@/vue-loader的使用'
import {createApp} from "vue";

console.log(_.join(['hello resolve'], ' '))

const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

createApp(App).mount('#app')