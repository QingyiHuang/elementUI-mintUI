import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(MintUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
