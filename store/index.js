import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import user from './modules/user'
import distributor from './modules/distributor'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    distributor
  },
  getters
})

export default store
