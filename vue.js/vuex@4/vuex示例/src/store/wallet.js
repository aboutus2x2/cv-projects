export default {
    namespaced: true,
    state() {
        return {
            money: 100
        }
    },
    actions: {
        aMoney({commit}, amount) {
            commit('mMoney', amount)
        }
    },
    mutations: {
        mMoney(state, amount) {
            state.money = amount
        }
    }
}