import {createStore} from "vuex";
import students from './students'

const store = createStore({
    modules: {
        students
    },
    state() {
        return {}
    },
    actions: {},
    mutations: {}
});

export default store