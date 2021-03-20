import Vue from 'vue'
import App from './App'
import util from './utils/util'
import './utils/mixinConfig'
import config from './config'
import store from './store'
import alert from '@/utils/alert'


import uView from "uview-ui";
Vue.use(uView);



Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$util = util
Vue.prototype.$config = config
Vue.prototype.$store = store
Vue.prototype.$alert = alert

const app = new Vue({
  store,
	...App
})
app.$mount()
