import {createStore} from "vuex";

const store = createStore({
    // 开启严格模式
    strict: true,
    state() {
        return {
            account: '',
            pwd: ''
        }
    },
    actions: {
        addAccount({commit}, payload) {
            commit('mAccount', payload)
        }
    },
    mutations: {
        mAccount(state, payload) {
            Object.assign(state, payload)
        }
    }
});

export default store