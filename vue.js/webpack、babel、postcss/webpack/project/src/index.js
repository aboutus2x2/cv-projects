import moment from 'moment'
// import _ from 'lodash'
// webpack 可以直接识别和引入js文件
import '../lodash.js'


// 创建组件的函数
function component() {
    const div = document.createElement('div')
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    div.innerHTML = moment().format('YYYY/MM/DD hh:mm:ss a') + _.join(['Hello', 'webpack'], ' ')
    return div
}

// 插入到页面中
document.body.appendChild(component())