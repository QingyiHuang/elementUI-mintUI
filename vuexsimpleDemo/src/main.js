import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import Son1 from './components/list'
Vue.component('son',Son1)

Vue.use(Vuex)

//导入模块store
import numD from './store/modules/num'
import user from './store/modules/user'
let store = new Vuex.Store({
  modules:{
    numD:numD,
    users:user
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
