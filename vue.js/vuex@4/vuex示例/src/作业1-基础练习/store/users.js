export default {
    state() {
        return {
            tableData: [
                {
                    name: '张三',
                    sex: 'male',
                    age: 17,
                },
                {
                    name: '李四',
                    sex: 'female',
                    age: 24,
                },
                {
                    name: '老王',
                    sex: 'other',
                    age: 30,
                },
            ]
        }
    },
    actions: {
        // 添加一条数据
        // 规定 payload 是一条表格数据
        pushOne(store, payload) {
            // 添加一条数据到当前状态
            store.state.tableData.push(payload)
            // 调用 mutation 修改状态
            store.commit('mTD', store.state.tableData)
        }
    },
    mutations: {
        mTD(state, payload) {
            // 规定 payload 是一个数组数据
            state.tableData = payload
        }
    },
    getters: {
        // 所有男性
        allMale(state) {
            return state.tableData.filter(user => user.sex === 'male')
        }
    }
}