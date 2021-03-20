import {
  getMerchantInfo
} from '@/api/merchant.js'
const user = {
  state: {
    merchantInfo: uni.getStorageSync('merchantInfo') || {},//默认为0
    token: uni.getStorageSync('token') || null
  },

  mutations: {
    SET_MERCHANT_INFO: (state, merchantInfo) => {
      uni.setStorageSync('merchantInfo', merchantInfo)
      state.merchantInfo = merchantInfo
    },
    SET_TOKEN: (state, token) => {
      uni.setStorageSync('token', token)
      state.token = token
    }
  },

  actions: {
    // 获取商户内容信息
    getMerchantInfo({ commit }, {}) {
      return new Promise((resolve, reject) => {
        getMerchantInfo().then(res => {
          console.log(res)
          commit('SET_MERCHANT_INFO', res)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        uni.removeStorageSync('token');
        resolve()
      })
    }
  }
}
export default user