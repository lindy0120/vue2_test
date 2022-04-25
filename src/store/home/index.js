import { getCategoryList } from '@/api'
const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    async categoreList({ commit }) {
        const res = await getCategoryList()
        console.log(res)
        if (res.code === 200) {
            commit("CATEGORYLIST", res.data)
        }
    }
}
const getter = {}
export default {
    state,
    mutations,
    actions,
    getter
}