import wallet from './wallet'

// 导出一个模块的配置
export default {
    // 开启命名空间
    namespaced: true,
    // 嵌套模块
    modules: {
        wallet
    },
    // 配置中的内容和 根上的内容相同 至少要包含 state actions mutations
    state() {
        return {
            goodsItems: []
        }
    },
    actions: {
        // 添加商品
        addItem(store, item) {
            console.log(store)
            // store.rootState 可以访问根节点的 state
            console.log(store.rootState.name)
            // store.rootGetters 可以访问根节点的 getters
            store.state.goodsItems.push(item)
            store.commit('mGoodsItems', store.state.goodsItems)
        },
        aGoodsItems: {
            // 设置action到根节点上
            root: true,
            // action具体的函数内容
            handler(store, payload) {
                store.commit('mGoodsItems', payload)
            }
        }
    },
    mutations: {
        // 修改状态
        mGoodsItems(state, items) {
            state.goodsItems = items
        }
    },
    getters: {
        topOne(state) {
            return state.goodsItems[0]
        }
    }
}