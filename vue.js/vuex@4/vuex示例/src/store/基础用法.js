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
    actions: {
        // aName(store, payload) {
        //     // store: 代表当前 store 对象(本质上是 store 对象的简化版本)
        //     // payload: 新的状态值
        //     console.log(store)
        //     console.log(payload)
        //
        //     // action 中通过调用 commit 去调用 mutation 函数来修改 state
        //     store.commit('mName', payload)
        // }


        // action 可以是 异步的
        async aName({commit}, payload) {
            console.log('请求开始')
            // 假装进行网络请求
            const newName = await new Promise(resolve => {
                setTimeout(() => {
                    // 假装服务器进行响应
                    // 响应了一个新的名称叫 小明
                    resolve('小明')
                }, 3000)
            })
            console.log('请求完成')
            // 修改状态
            commit('mName', newName)
            // 返回值
            return newName
        }
    },
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