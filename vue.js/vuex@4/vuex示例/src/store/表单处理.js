// 知识点
// 如何对vuex的状态进行双向绑定
//        1. 给要进行双向绑定的状态添加计算属性
//        2. 计算属性分别定义 set get 函数来为状态赋值
//        3. 页面使用 v-model 绑定对应的计算属性

import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            name: '张三',
            sex: 'male',
            age: 17
        };
    },
    mutations: {
        mName(state, payload) {
            state.name = payload;
        },
        mSex(state, payload) {
            state.sex = payload;
        },
        mAge(state, payload) {
            state.age = payload;
        },
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload);
        },
        aSex({commit}, payload) {
            commit('mSex', payload);
        },
        aAge({commit}, payload) {
            commit('mAge', payload);
        },
    }
});

export default store;