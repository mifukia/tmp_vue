import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count:0,
}
const getters = {
    countTxt(state){
        return `${state.count}回`
    }
}
const mutations = {
    increment(state,payload){
        state.count = Math.pow(state.count,payload.number)
    },
    decrement(state){
        state.count --
    }
}
const actions = {
    increment(context){
        context.commit('increment',{"number":2})
    },
    decrement(context){
        context.commit('decrement',{"number":2})
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
