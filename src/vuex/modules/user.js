import * as types from '../types'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false

}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        localStorage.setItem('loginStatus', true)
        commit(types.SET_LOGIN_STATUS, true)
    }

}

const getters = {
    loginStatus: state => state.loginStatus
}

const mutations = {

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    }

}

export default {
    state,
    actions,
    getters,
    mutations
}
