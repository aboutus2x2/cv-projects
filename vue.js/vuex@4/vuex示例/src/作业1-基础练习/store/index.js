import {createStore} from "vuex";
import users from './users';

const store = createStore({
    state() {
        return {
            // 对应page1中的输入框的值
            value: '',
            ...users.state()
        }
    },
    actions: {
        aValue(store, payload) {
            store.commit('mValue', payload)
        },
        ...users.actions
    },
    mutations: {
        mValue(state, payload) {
            state.value = payload
        },
        ...users.mutations
    },
    getters: {
        ...users.getters
    }
});

export default store