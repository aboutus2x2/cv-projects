// 知识点
// 集成步骤
//      1. 创建 store 对象
//      2. 添加 store 配置
//      3. 至少配置 state mutations actions
//      4. 导出 store
//      5. 在 main.js 中 安装 store 插件
// 页面中读取状态
// 修改状态
//      1. 通过commit调用mutation修改状态
//      2. 通过dispatch调用action修改状态
// 异步 action 的使用，返回值的获取


import {createStore} from "vuex";

const store = createStore({
    // 状态
    // 写法和组件的data相同
    state() {
        return {
            name: '张三'
        }
    },
    // 操作
    actions: {},
    // 修改状态的函数
    mutations: {
        mName(state, payload) {
            // state: 当前状态
            // payload: 新的状态值
            console.log(state)
            console.log(payload)
            // 修改状态
            // 只有在 mutation 内可以修改状态
            state.name = payload
        }
    }
})

export default store