export default {
    strict: true,
    namespaced: true,
    state() {
        return {
            id: 4,
            data: [
                {
                    id: 1,
                    name: '张三',
                    sex: 'male',
                    score: 66,
                    clazz: '1'
                },
                {
                    id: 2,
                    name: '李四',
                    sex: 'female',
                    score: 99,
                    clazz: '2'
                },
                {
                    id: 3,
                    name: '老王',
                    sex: 'other',
                    score: 55,
                    clazz: '3'
                },
            ].reverse()
        }
    },
    actions: {
        // data: 学生的数据对象
        add({commit, state}, data) {
            data.id = state.id
            commit('add', data)
            commit('idIncrease')
        },
        // data: 学生的数据对象
        update({commit, state}, data) {
            commit('update', data)
        },
        // 删除数据
        // ids: 要删除数据的id数组
        remove({commit}, ids) {
            commit('remove', ids)
        },
        // 查找数据
        getById({state}, id) {
            return state.data.find(item => item.id === id)
        }
    },
    mutations: {
        add(state, data) {
            state.data.unshift(data)
        },
        update(state, data) {
            // 查找要修改的对象
            const stu = state.data.find(item => item.id === data.id)
            // 赋值
            Object.assign(stu, data)
        },
        // id增加
        idIncrease(state) {
            state.id++
        },
        remove(state, ids) {
            // 方法一: 传统方法
            // const arr = state.data
            // ids.forEach(id => {
            //     const i = state.data.findIndex(item => item.id === id)
            //     // 删除数组成员用数组的api
            //     arr.splice(i, 1)
            // })
            // state.data = arr

            // 方法二: 过滤
            state.data = state.data.filter(item => !ids.includes(item.id))
        }
    },
    getters: {
        total(state) {
            return state.data.length
        }
    }
}