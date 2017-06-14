import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    alertMsg: '退出登录',
    showAlert: false
}

const actions = {
    showAlert({ commit }, status) {
        commit(types.COM_SHOW_ALERT, status)
    },
    alertMsg({ commit }, str) {
        commit(types.COM_ALERT_MSG, str)
    }
}

const getters = {
    showAlert: state => state.showAlert
}

const mutations = {
    [types.COM_SHOW_ALERT](state, status) {
        state.showAlert = status
    },
    [types.COM_ALERT_MSG](state, str) {
        state.alertMsg = str
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
