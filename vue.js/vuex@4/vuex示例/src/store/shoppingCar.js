// 导出一个模块的配置
export default {
    // 配置中的内容和 根上的内容相同 至少要包含 state actions mutations
    state() {
        return {
            goodsItems: []
        }
    },
    actions: {
        // 添加商品
        addItem(store, item) {
            store.state.goodsItems.push(item)
            store.commit('mGoodsItems', store.state.goodsItems)
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