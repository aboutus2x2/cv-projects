// 知识点
// 什么是getter
// 应用场景
// 使用方法


// 什么是getter？
// getter就是一个访问控制的函数，可以控制读取 state 时得到的值

// 应用场景
// getter 可以理解成类似组件的 computed 计算属性，所以应用场景类似计算属性
// 控制访问的内容，返回想要给页面的数据

import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            now: new Date()
        }
    },
    actions: {},
    mutations: {},
    getters: {
        // key: 访问器名称
        // value: 获取值的函数
        // getter 本质上就是一个函数
        // state：是当前 store 对象的状态
        now(state) {
            // 需要返回一个值 用于页面获取

            // 例如: 此处可以将日期对象格式化成字符串
            return `${state.now.getFullYear()}-${state.now.getMonth() + 1}-${state.now.getDate()}`
        }
    }
});

export default store
