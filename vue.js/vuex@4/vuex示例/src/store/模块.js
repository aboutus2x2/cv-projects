// 知识点 https://vuex.vuejs.org/zh/guide/modules.html
// 什么是module(模块)？
// 应用场景
// 基础使用
//      1. 注册模块
//          1. 单独创建一个新的 store 配置文件(创建子节点)，存放独立业务的数据，例如：user.js
//          2. 给 store/index.js(根节点) 配置添加 module 属性
//          3. 将 user.js 赋值 module 属性
//      2. 使用模块
// 注意: 没有命名空间的模块，所有的 actions mutations 和 getters 都注册到根节点上
// 什么是命名空间？
// 添加命名空间后，如何调用 actions getters
//      1. actions: store.dispatch('命名空间名称/action名称')
//      2. getters: store.getters['命名空间名称/getter名称']
// 如何在带有命名空间的 module 中设置全局 actions 和读取全局状态
// 使用 createNamespacedHelpers 辅助函数来简化调用命名空间的过程
// 给 mapState 和 mapActions 添加命名空间


// 什么是模块？
// 按业务区分的 vuex 的子仓库(也就是状态树的子节点)

// 应用场景
// 多用于复杂应用中，按照业务划分模块，让代码先得更有序简洁

// 什么是命名空间？
// 由于子节点默认将 mutations actions 注册到根节点上，所以子节点上的 mutations 和 actions 的名称不能和根节点重复
// 但有时又希望能使用重复的名称，那么在给 mutations 和 actions 命名时，我们需要一个独立的不受根节点影响的空间，这就是命名空间

import {createStore} from "vuex";
import shoppingCar from './shoppingCar'

const store = createStore({
    // 开启严格模式
    // 严格模式中 页面只能通过 store.dispatch 修改状态
    strict: true,
    modules: {
        // key: 模块名
        // value: 模块的配置
        shoppingCar
    },
    state() {
        return {
            name: '张三'
        }
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload)
        },
    },
    mutations: {
        mName(state, payload) {
            state.name = payload
        }
    }
});

export default store