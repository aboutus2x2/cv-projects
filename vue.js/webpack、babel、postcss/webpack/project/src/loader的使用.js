import './assets/main.css'
import head from './assets/head.png'
import {createApp} from "vue";
import App from './vue-loader的使用.vue'

function component() {
    const div = document.createElement('div')
    div.classList.add('box')
    return div
}

function createImg() {
    const img = document.createElement('img')
    img.style.width = '100px'
    img.style.height = '100px'
    img.src = head
    return img
}

function createVueApp() {
    const div = document.createElement('div')
    div.id = 'app'
    document.body.appendChild(div)
    createApp(App).mount('#app')
}

document.body.appendChild(component())
document.body.appendChild(createImg())
createVueApp()